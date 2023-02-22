import React, { useState } from 'react'
import '../../styles/PrivateHome.css'
import backGround from '../../assets/bg-bienetre-hydro.jpg'
import { Stack, Typography, TextField, Button, Modal, Box } from '@mui/material'
import { Container } from '@mui/system'
import { LocalizationProvider, MobileDatePicker, TimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { getAuth } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'
import LoisirsNavBar from '../../components/LoisirsNavBar'

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

export default function ResaHydro() {

    const [value, setValue] = useState(dayjs())
    const formattedDate = value.format('LL')

    const handleChangeDate = (newValue) => {
        setValue(newValue)
    }

    const minDate = dayjs()

    const [valueTime, setValueTime] = useState(dayjs())
    const formattedTime = valueTime.format('HH:mm')

    const handleChangeTime = (valueTime) => {
        setValueTime(valueTime)
    }

    const auth = getAuth()
    const user = auth.currentUser.uid
    const now = new Date()
    const dateString = now.toLocaleDateString()
    const timeString = now.toLocaleTimeString()
    const dateTimeString = dateString + ' ' + timeString 

    const addToLoisirs = async () => {
      const loisirsRef = doc(db, 'Loisirs', dateTimeString)
      if(validateName() && validatePhone()) {
        await setDoc(loisirsRef, {
          activity: 'Lit Hydrosensoriel',
          nom: name,
          phone: phone,
          date: formattedDate.toString(),
          time: formattedTime.toString(),
          user: user,
        })
        handleOpenModal()
      }
    }

    const [name, setName] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const [phone, setPhone] = useState("")

    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
    }

    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate()
    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => {
        setOpenModal(false)
        navigate('/private/accueil')
    }

    function validateName() {
      if(name === '') {
          alert('Entrez un nom s\'il vous plaît')
          return false
      } else {
          return true
      }
    }

  function validatePhone() {
    if(phone === '') {
        alert('Entrez un numéro de téléphone s\'il vous plaît')
        return false
    } else {
        return true
    }
  }

  return (
    <>
      <LoisirsNavBar />
      <div className='container' style={{ margin: 0, padding: 0, maxWidth: "1920px" }}>
        <img src={backGround} alt='' className='img-fluid' />
      </div>
      <Container maxWidth="50%" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='h2' sx={{ textAlign: 'center', marginTop: '50px' }}>
          RÉSERVATION LIT HYDROSENSORIEL (49€)
        </Typography>
        <Typography variant='h4' sx={{ textAlign: 'center', marginTop: '25px' }}>
          Thalasso & Spa - Roscoff
        </Typography>
        <TextField id='enter-name' label="Votre Nom" variant='outlined' sx={{ minWidth: 400, marginTop: '50px' }} value={name} onChange={handleNameChange} />
        <TextField id='enter-phone' label="Téléphone" variant='outlined' sx={{ minWidth: 400, marginTop: '25px' }} value={phone} onChange={handlePhoneChange} />
        <div style={{ display: 'flex', gap: '25px', marginTop: '25px' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='fr'>
            <Stack sx={{ minWidth: 400 }}>
              <MobileDatePicker
                label='Date'
                inputFormat='DD/MM/YYYY'
                value={value}
                onChange={handleChangeDate}
                minDate={minDate}
                renderInput={(params) => <TextField {...params} />}
              >
              </MobileDatePicker>
            </Stack>
          </LocalizationProvider>
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='fr'>
            <Stack sx={{ minWidth: 400, marginTop: '25px' }}>
              <TimePicker
                label='Heure'
                value={valueTime}
                onChange={handleChangeTime}
                renderInput={(params) => <TextField {...params} />}
              >
              </TimePicker>
            </Stack>
          </LocalizationProvider>
        <Button variant='contained' sx={{ marginTop: '25px', color: 'white', bgcolor: 'black', padding: 2, minWidth: 400, marginBottom: '50px' }} onClick={() => addToLoisirs()}>
          VALIDER MA RÉSERVATION
        </Button>
      </Container>
      <Modal open={openModal} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
        <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
            Merci pour votre réservation!
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Nous vous contacterons au plus vite pour vous confirmer celle-ci
          </Typography>
          <Button variant="outlined" sx={{ mt: 2 }} onClick={handleCloseModal}>Fermer</Button>
        </Box>
      </Modal>
    </>
  )
}
