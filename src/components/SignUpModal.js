import React, { useContext, useRef, useState } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

export default function SignUpModal() {
    const {modalState, toggleModals, signUp} = useContext(UserContext)

    const navigate = useNavigate()

    const [validation, setValidation] = useState("")
    
    const inputs = useRef([])
    const addInputs = el => {
        if(el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    }
    const formRef = useRef()

    const handleForm = async (e) => {
        e.preventDefault()
        if((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
            setValidation("Le mot de passe doit contenir au moins 6 caractères")
            return
        }
        else if(inputs.current[1].value !== inputs.current[2].value) {
            setValidation("Les mots de passe ne correspondent pas")
            return
        }
        try {
           await signUp(inputs.current[0].value, inputs.current[1].value) 
           formRef.current.reset()
           setValidation("")
           toggleModals("close")
           navigate("/private/private-home")
        }catch(err) {
            if(err.code === "auth/invalid-email") {
                setValidation("Le format de l'email n'est pas valide")
            }
            if(err.code === "auth/email-already-in-use") {
                setValidation("L'email est déjà inscrit")
            }
        }
    }

    const closeModal = () => {
        setValidation("")
        toggleModals("close")
    }

  return (
    <>
          {modalState.signUpModal && (
              <div className='position-fixed top-0 vw-100 vh-100'>
                  <div
                      className='w-100 h-100 bg-light bg-opacity-75'
                      onClick={closeModal}>
                  </div>
                  <div className='position-absolute top-50 start-50 translate-middle' style={{ minWidth: "400px" }}>
                      <div className='modal-dialog border p-3'>
                          <div className='modal-content'>
                              <div className='modal-header'>
                                  <h5 className='modal-title'>Inscription</h5>
                                  <button
                                      className='btn-close'
                                      onClick={closeModal}>
                                  </button>
                              </div>
                              <div className='modal-body'>
                                  <form className='sign-up-form' onSubmit={handleForm} ref={formRef}>
                                      <div className='mb-3'>
                                          <label htmlFor='signUpEmail' className='form-label'>Adresse mail</label>
                                          <input
                                              name='email'
                                              required
                                              type='email'
                                              className="form-control"
                                              id='signUpEmail'
                                              ref={addInputs}
                                          />
                                      </div>
                                      <div className='mb-3'>
                                          <label htmlFor='signUpPwd' className='form-label'>Mot de passe</label>
                                          <input
                                              name='pwd'
                                              required
                                              type='password'
                                              className="form-control"
                                              id='signUpPwd'
                                              ref={addInputs}
                                          />
                                      </div>
                                      <div className='mb-3'>
                                          <label htmlFor='repeatPwd' className='form-label'>Confirmez le mot de passe</label>
                                          <input
                                              name='pwd'
                                              required
                                              type='password'
                                              className="form-control"
                                              id='repeatPwd'
                                              ref={addInputs}
                                          />
                                          <p className='text-danger mt-1'>{validation}</p>
                                      </div>
                                      <button className='btn btn-primary'>Valider</button>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          )}
    </>
  )
}
