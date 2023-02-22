import React, { useContext, useRef, useState } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase-config'

export default function SignInModal() {
    const {modalState, toggleModals, signIn} = useContext(UserContext)

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
        try {
           await signIn(inputs.current[0].value, inputs.current[1].value) 
           setValidation("")
           toggleModals("close")
           navigate("/private/private-home")
        }catch {
          setValidation("Oups, l'email ou le mot de passe est incorrect")  
        }
    }

    const closeModal = () => {
        setValidation("")
        toggleModals("close")
    }

    function handleResetPwd() {
        if(inputs.current[0].value) {
            sendPasswordResetEmail(auth, inputs.current[0].value)
                .then(() => {
                    alert('Un mail de réinitialisation a été envoyé')
                })
                .catch((error) => {
                    alert(error)
                })
        } else {
            alert('vous devez entrer votre mail')
        }
    }

  return (
    <>
          {modalState.signInModal && (
              <div className='position-fixed top-0 vw-100 vh-100'>
                  <div
                      className='w-100 h-100 bg-light bg-opacity-75'
                      onClick={closeModal}>
                  </div>
                  <div className='position-absolute top-50 start-50 translate-middle' style={{ minWidth: "400px" }}>
                      <div className='modal-dialog border p-3'>
                          <div className='modal-content'>
                              <div className='modal-header'>
                                  <h5 className='modal-title'>Connexion</h5>
                                  <button
                                      className='btn-close'
                                      onClick={closeModal}>
                                  </button>
                              </div>
                              <div className='modal-body'>
                                  <form className='sign-up-form' onSubmit={handleForm} ref={formRef}>
                                      <div className='mb-3'>
                                          <label htmlFor='signInEmail' className='form-label'>Adresse mail</label>
                                          <input
                                              name='email'
                                              required
                                              type='email'
                                              className="form-control"
                                              id='signInEmail'
                                              ref={addInputs}
                                          />
                                      </div>
                                      <div className='mb-3'>
                                          <label htmlFor='signInPwd' className='form-label'>Mot de passe</label>
                                          <input
                                              name='pwd'
                                              required
                                              type='password'
                                              className="form-control"
                                              id='signInPwd'
                                              ref={addInputs}
                                          />
                                          <p className='text-danger mt-1'>{validation}</p>
                                      </div>
                                      <p>Mot de passe oublié ? <span style={{ fontWeight: 900, cursor: "pointer" }} onClick={handleResetPwd}>Réinitialiser</span></p>
                                      <button className='btn btn-primary'>Connexion</button>
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
