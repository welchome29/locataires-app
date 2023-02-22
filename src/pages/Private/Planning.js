import { Typography, TextField, Button, Modal, Box } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React, { useState } from 'react'
import backGround from '../../assets/bg-planning.jpg'
import '../../styles/PrivateHome.css'
import { LocalizationProvider, MobileDatePicker, TimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { getAuth } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase-config'

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

export default function Planning() {
  const minDate = dayjs()
  const minTime = dayjs().set('hour', 13)
  const maxTime = dayjs().set('hour', 19)
  const [value, setValue] = useState(dayjs())
  const handleChangeDate = (newValue) => {
    setValue(newValue)
  }
  const [valueTime, setValueTime] = useState(dayjs())

  const handleChangeTime = (valueTime) => {
    setValueTime(valueTime)
  }

  const [value2, setValue2] = useState(dayjs())
  const handleChangeDate2 = (newValue2) => {
    setValue2(newValue2)
  }
  const [valueTime2, setValueTime2] = useState(dayjs())

  const handleChangeTime2 = (valueTime2) => {
    setValueTime2(valueTime2)
  }

  const [name, setName] = useState("")

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const [phone, setPhone] = useState("")

  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
  }

  const [address, setAddress] = useState("")

  const handleAddressChange = (event) => {
    setAddress(event.target.value)
  }

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const auth = getAuth()
  const user = auth.currentUser.uid
  const formattedDate = value.format('LL')
  const formattedDate2 = value2.format('LL')
  const formattedTime = valueTime.format('HH:mm')
  const formattedTime2 = valueTime2.format('HH:mm')

  const addToCheckIn = async () => {
    const checkInRef = doc(db, 'CheckIn', user)
    if(validateName() && validatePhone() && validateAddress()) {
      await setDoc(checkInRef, {
        name: name,
        phone: phone,
        villa: address,
        date: formattedDate,
        hour: formattedTime,
      })
      handleOpenModal()
    }
  }

  const addToCheckOut = async () => {
    const checkOutRef = doc(db, 'CheckOut', user)
    if(validateName() && validatePhone() && validateAddress()) {
      await setDoc(checkOutRef, {
        name: name,
        phone: phone,
        villa: address,
        date: formattedDate2,
        hour: formattedTime2,
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

  function validatePhone() {
    if (phone === '') {
      alert('Entrez un numéro de téléphone s\'il vous plaît')
      return false
    } else {
      return true
    }
  }

  function validateAddress() {
    if (address === '') {
      alert('Entrez une adresse ou un nom de villa s\'il vous plaît')
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
          RÉSERVATION CHECK-IN ET CHECK-OUT
        </Typography>
        <TextField id='enter-name' label="Votre Nom" variant='outlined' sx={{ minWidth: 425, marginTop: '50px' }} value={name} onChange={handleNameChange} />
        <TextField id='enter-phone' label="Numéro de Téléphone" variant='outlined' sx={{ minWidth: 425, marginTop: '25px' }} value={phone} onChange={handlePhoneChange} />
        <TextField id='enter-address' label="Adresse de la location ou Nom de la villa" variant='outlined' sx={{ minWidth: 425, marginTop: '25px' }} value={address} onChange={handleAddressChange} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginTop: '35px', flexWrap: 'wrap' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='fr'>
            <Stack sx={{ maxWidth: 200 }}>
              <MobileDatePicker
                label="DATE D'ARRIVÉE"
                inputFormat='DD/MM/YYYY'
                value={value}
                onChange={handleChangeDate}
                minDate={minDate}
                renderInput={(params) => <TextField {...params} />}
              >
              </MobileDatePicker>
            </Stack>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='fr'>
            <Stack sx={{ maxWidth: 200 }}>
              <TimePicker
                label="HEURE D'ARRIVÉE SOUHAITÉE"
                value={valueTime}
                onChange={handleChangeTime}
                renderInput={(params) => <TextField {...params} />}
                minTime={minTime}
                maxTime={maxTime}
              >
              </TimePicker>
            </Stack>
          </LocalizationProvider>
        </div>
        <Button variant='contained' sx={{ minWidth: 425, marginTop: '25px', paddingY: '15px' }} color='success' onClick={() => addToCheckIn()}>réserver le check-in</Button>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginTop: '35px', flexWrap: 'wrap' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='fr'>
            <Stack sx={{ maxWidth: 200 }}>
              <MobileDatePicker
                label="DATE DE DÉPART"
                inputFormat='DD/MM/YYYY'
                value={value2}
                onChange={handleChangeDate2}
                minDate={minDate}
                renderInput={(params) => <TextField {...params} />}
              >
              </MobileDatePicker>
            </Stack>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='fr'>
            <Stack sx={{ maxWidth: 200 }}>
              <TimePicker
                label="HEURE DE DÉPART SOUHAITÉE"
                value={valueTime2}
                onChange={handleChangeTime2}
                renderInput={(params) => <TextField {...params} />}
              >
              </TimePicker>
            </Stack>
          </LocalizationProvider>
        </div>
        <Button variant='contained' sx={{ minWidth: 425, marginTop: '25px', paddingY: '15px', marginBottom: '50px' }} color='error' onClick={() => addToCheckOut()}>réserver le check-out</Button>
      </Container>
      <Modal open={openModal} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
        <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
            Merci pour votre réservation!
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Nous vous contacterons au plus vite pour vous confirmer votre créneau
          </Typography>
          <Button variant="outlined" sx={{ mt: 2 }} onClick={handleCloseModal}>Fermer</Button>
        </Box>
      </Modal>
    </>
  )
}
