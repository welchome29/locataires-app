import React, { useState } from 'react'
import '../../styles/PrivateHome.css'
import backGround from '../../assets/bg-velo-car.jpg'
import tarifs from '../../assets/tarif-velo.JPG'
import { FormControl, InputLabel, Select, Stack, Typography, TextField, Button, Modal, Box } from '@mui/material'
import { Container } from '@mui/system'
import MenuItem from '@mui/material/MenuItem'
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers'
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

export default function ResaVeloCar() {
    const [kayak, setKayak] = useState('')
    const [open, setOpen] = useState(false)

    const handleChange = (event) => {
        setKayak(event.target.value)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const [number, setNumber] = useState('')
    const [open2, setOpen2] = useState(false)

    const handleChange2 = (event) => {
        setNumber(event.target.value)
    }

    const handleClose2 = () => {
        setOpen2(false)
    }

    const handleOpen2 = () => {
        setOpen2(true)
    }

    const [kayak2, setKayak2] = useState('')
    const [open3, setOpen3] = useState(false)

    const handleChange3 = (event) => {
        setKayak2(event.target.value)
    }

    const handleClose3 = () => {
        setOpen3(false)
    }

    const handleOpen3 = () => {
        setOpen3(true)
    }

    const [number2, setNumber2] = useState('')
    const [open4, setOpen4] = useState(false)

    const handleChange4 = (event) => {
        setNumber2(event.target.value)
    }

    const handleClose4 = () => {
        setOpen4(false)
    }

    const handleOpen4 = () => {
        setOpen4(true)
    }

    const [kayak3, setKayak3] = useState('')
    const [open5, setOpen5] = useState(false)

    const handleChange5 = (event) => {
        setKayak3(event.target.value)
    }

    const handleClose5 = () => {
        setOpen5(false)
    }

    const handleOpen5 = () => {
        setOpen5(true)
    }

    const [number3, setNumber3] = useState('')
    const [open6, setOpen6] = useState(false)

    const handleChange6 = (event) => {
        setNumber3(event.target.value)
    }

    const handleClose6 = () => {
        setOpen6(false)
    }

    const handleOpen6 = () => {
        setOpen6(true)
    }

    const [value, setValue] = useState(dayjs())
    const formattedDate = value.format('LL')

    const handleChangeDate = (newValue) => {
        setValue(newValue)
    }

    const [value2, setValue2] = useState(dayjs())
    const formattedDate2 = value2.format('LL')

    const handleChangeDate2 = (newValue2) => {
        setValue2(newValue2)
    }

    const minDate = dayjs()

    const auth = getAuth()
    const user = auth.currentUser.uid
    const stringKayak = kayak.toString()
    const stringKayak2 = kayak2.toString()
    const stringKayak3 = kayak3.toString()
    const stringNumber = number.toString()
    const stringNumber2 = number2.toString()
    const stringNumber3 = number3.toString()
    const now = new Date()
    const dateString = now.toLocaleDateString()
    const timeString = now.toLocaleTimeString()
    const dateTimeString = dateString + ' ' + timeString 

    const addToLoisirs = async () => {
      const loisirsRef = doc(db, 'Loisirs', dateTimeString)
      if(validateName() && validatePhone() && validateKayak() && validateNumber()) {
        await setDoc(loisirsRef, {
          activity: 'Vélo Carantec',
          nom: name,
          phone: phone,
          velo1: stringKayak,
          nombre1: stringNumber,
          velo2: stringKayak2,
          nombre2: stringNumber2,
          velo3: stringKayak3,
          nombre3: stringNumber3,
          date_debut: formattedDate.toString(),
          date_fin: formattedDate2.toString(),
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

  function validateKayak() {
    if(kayak === '' && kayak2 === ''){
      alert('Veuillez choisir au moins un type de kayak s\'il vous plaît')
      return false
    } else {
      return true
    }
  }

  function validateNumber() {
    if(number === '' && number2 === ''){
      alert('Veuillez choisir le nombre de kayak s\'il vous plaît')
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
          RÉSERVATION DE VÉLOS À CARANTEC
        </Typography>
        <div style={{ display: 'flex', gap: '25px', marginTop: '50px' }}>
            <img src={tarifs} alt='' />
        </div>
        <TextField id='enter-name' label="Votre Nom" variant='outlined' sx={{ minWidth: 400, marginTop: '50px' }} value={name} onChange={handleNameChange} />
        <TextField id='enter-phone' label="Téléphone" variant='outlined' sx={{ minWidth: 400, marginTop: '25px' }} value={phone} onChange={handlePhoneChange} />
        <div style={{ display: 'flex', gap: '25px', marginTop: '25px' }}>
          <FormControl sx={{ minWidth: 275 }}>
            <InputLabel id='select-velo-label'>Type de vélo</InputLabel>
            <Select
              labelId="select-velo-label"
              id="select-velo"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={kayak}
              onChange={handleChange}
              autoWidth
              label="Type de vélo"
            >
              <MenuItem value='VAE'>Vélo électrique pour adulte</MenuItem>
              <MenuItem value='VTTa'>Vélo tout terrain pour adulte</MenuItem>
              <MenuItem value='VTTe'>Vélo tout terrain pour enfant</MenuItem>
              <MenuItem value='Remorque'>Remorque / Suiveur</MenuItem>
              <MenuItem value='PorteBB'>Porte bébé</MenuItem>
              <MenuItem value='Panier'>Panier</MenuItem>
              <MenuItem value='Sacoche'>Sacoche</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 100 }}>
            <InputLabel id='select-kayak-label'>Nombre</InputLabel>
            <Select
              labelId="select-kayak-label"
              id="select-kayak"
              open={open2}
              onClose={handleClose2}
              onOpen={handleOpen2}
              value={number}
              onChange={handleChange2}
              autoWidth
              label="Nombre"
            >
              <MenuItem value='0'>0</MenuItem>
              <MenuItem value='1'>1</MenuItem>
              <MenuItem value='2'>2</MenuItem>
              <MenuItem value='3'>3</MenuItem>
              <MenuItem value='4'>4</MenuItem>
              <MenuItem value='5'>5</MenuItem>
              <MenuItem value='6'>6</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{ display: 'flex', gap: '25px', marginTop: '25px' }}>
          <FormControl sx={{ minWidth: 275 }}>
            <InputLabel id='select-velo-label'>Type de vélo</InputLabel>
            <Select
              labelId="select-velo-label"
              id="select-velo"
              open={open3}
              onClose={handleClose3}
              onOpen={handleOpen3}
              value={kayak2}
              onChange={handleChange3}
              autoWidth
              label="Type de vélo"
            >
              <MenuItem value='VAE'>Vélo électrique pour adulte</MenuItem>
              <MenuItem value='VTTa'>Vélo tout terrain pour adulte</MenuItem>
              <MenuItem value='VTTe'>Vélo tout terrain pour enfant</MenuItem>
              <MenuItem value='Remorque'>Remorque / Suiveur</MenuItem>
              <MenuItem value='PorteBB'>Porte bébé</MenuItem>
              <MenuItem value='Panier'>Panier</MenuItem>
              <MenuItem value='Sacoche'>Sacoche</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 100 }}>
            <InputLabel id='select-kayak-label'>Nombre</InputLabel>
            <Select
              labelId="select-kayak-label"
              id="select-kayak"
              open={open4}
              onClose={handleClose4}
              onOpen={handleOpen4}
              value={number2}
              onChange={handleChange4}
              autoWidth
              label="Nombre"
            >
              <MenuItem value='0'>0</MenuItem>
              <MenuItem value='1'>1</MenuItem>
              <MenuItem value='2'>2</MenuItem>
              <MenuItem value='3'>3</MenuItem>
              <MenuItem value='4'>4</MenuItem>
              <MenuItem value='5'>5</MenuItem>
              <MenuItem value='6'>6</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{ display: 'flex', gap: '25px', marginTop: '25px' }}>
          <FormControl sx={{ minWidth: 275 }}>
            <InputLabel id='select-velo-label'>Type de vélo</InputLabel>
            <Select
              labelId="select-velo-label"
              id="select-velo"
              open={open5}
              onClose={handleClose5}
              onOpen={handleOpen5}
              value={kayak3}
              onChange={handleChange5}
              autoWidth
              label="Type de vélo"
            >
              <MenuItem value='VAE'>Vélo électrique pour adulte</MenuItem>
              <MenuItem value='VTTa'>Vélo tout terrain pour adulte</MenuItem>
              <MenuItem value='VTTe'>Vélo tout terrain pour enfant</MenuItem>
              <MenuItem value='Remorque'>Remorque / Suiveur</MenuItem>
              <MenuItem value='PorteBB'>Porte bébé</MenuItem>
              <MenuItem value='Panier'>Panier</MenuItem>
              <MenuItem value='Sacoche'>Sacoche</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 100 }}>
            <InputLabel id='select-kayak-label'>Nombre</InputLabel>
            <Select
              labelId="select-kayak-label"
              id="select-kayak"
              open={open6}
              onClose={handleClose6}
              onOpen={handleOpen6}
              value={number3}
              onChange={handleChange6}
              autoWidth
              label="Nombre"
            >
              <MenuItem value='0'>0</MenuItem>
              <MenuItem value='1'>1</MenuItem>
              <MenuItem value='2'>2</MenuItem>
              <MenuItem value='3'>3</MenuItem>
              <MenuItem value='4'>4</MenuItem>
              <MenuItem value='5'>5</MenuItem>
              <MenuItem value='6'>6</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{ display: 'flex', gap: '25px', marginTop: '25px' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='fr'>
            <Stack sx={{ minWidth: 400 }}>
              <MobileDatePicker
                label='Date de départ'
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
        <div style={{ display: 'flex', gap: '25px', marginTop: '25px' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='fr'>
            <Stack sx={{ minWidth: 400 }}>
              <MobileDatePicker
                label='Date de fin'
                inputFormat='DD/MM/YYYY'
                value={value2}
                onChange={handleChangeDate2}
                minDate={minDate}
                renderInput={(params) => <TextField {...params} />}
              >
              </MobileDatePicker>
            </Stack>
          </LocalizationProvider>
        </div>
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
            Nous consultons nos partenaires...Nous vous contacterons au plus vite pour vous donner confirmation.
          </Typography>
          <Button variant="outlined" sx={{ mt: 2 }} onClick={handleCloseModal}>Fermer</Button>
        </Box>
      </Modal>
    </>
  )
}
