import React, { useState } from 'react'
import '../../styles/PrivateHome.css'
import backGround from '../../assets/bg-contact.jpg'
import { Container } from '@mui/system'
import { Button, Modal, TextareaAutosize, TextField, Typography, Box } from '@mui/material'
import { getAuth } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function Contact() {
  const [name, setName] = useState("")

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const [object, setObject] = useState("")

  const handleObjectChange = (event) => {
    setObject(event.target.value)
  }

  const [message, setMessage] = useState("")

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  const auth = getAuth()
  const user = auth.currentUser.uid
  const now = new Date()
  const dateString = now.toLocaleDateString()
  const timeString = now.toLocaleTimeString()
  const dateTimeString = dateString + ' ' + timeString 

  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate()
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => {
    setOpenModal(false)
    navigate('/private/accueil')
  }

  const addToMessage = async () => {
    const messageRef = doc(db, 'Messages', dateTimeString)
    if(validateName() && validateObject() && validateMessage()) {
      await setDoc(messageRef, {
        user: user,
        nom: name,
        objet: object,
        message: message,
      })
      handleOpenModal()
    }
  }

  function validateName() {
    if(name === '') {
        alert('Entrez un nom s\'il vous plaît')
        return false
    } else {
        return true
    }
  }

  function validateObject() {
    if(object === '') {
        alert('Indiquez l\'objet de votre demande s\'il vous plaît')
        return false
    } else {
        return true
    }
  }

  function validateMessage() {
    if(message === '') {
        alert('Indiquez votre demande s\'il vous plaît')
        return false
    } else {
        return true
    }
  }

  return (
    <>
      <div className='container' style={{ margin: 0, padding: 0, maxWidth: "1920px" }}>
        <img src={backGround} alt='' className='img-fluid' />
      </div>
      <Container maxWidth="80%" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='h2' sx={{ textAlign: 'center', marginTop: '50px' }}>
          CONTACTEZ-NOUS
        </Typography>
        <TextField id='enter-name' label="Votre Nom" variant='outlined' sx={{ minWidth: 400, marginTop: '50px' }} value={name} onChange={handleNameChange} />
        <TextField id='enter-object' label="Objet de la demande" variant='outlined' sx={{ minWidth: 400, marginTop: '25px' }} value={object} onChange={handleObjectChange} />
        <TextareaAutosize aria-label='minimum height' minRows={10} placeholder='Message' style={{ width: 400, marginTop: '25px' }} value={message} onChange={handleMessageChange} />
        <Button variant='contained' sx={{ marginTop: '25px', marginBottom: '50px', width: 400, paddingY: '15px' }} color='info' onClick={() => addToMessage()}>Envoyer</Button>
      </Container>
      <Modal open={openModal} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
        <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
            Merci de nous avoir contacté!
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Nous revenons vers vous au plus vite.
          </Typography>
          <Button variant="outlined" sx={{ mt: 2 }} onClick={handleCloseModal}>Fermer</Button>
        </Box>
      </Modal>
    </>
  )
}
