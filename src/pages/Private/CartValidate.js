import { Box, Card, CardContent, CardHeader, CardMedia, Container, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase-config'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { green } from '@mui/material/colors'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider, MobileDatePicker, TimePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { Stack } from '@mui/system'
import 'dayjs/locale/fr'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
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

export default function CartValidate() {
    const [totalPrice, setTotalPrice] = useState(0)
    const auth = getAuth()
    const user = auth.currentUser.uid

    useEffect(() => {
        const cartRef = doc(db, 'Carts', user)
        getDoc(cartRef).then(docSnap => {
            if(docSnap.exists()) {
                setTotalPrice(docSnap.get('totalPrice'))
            }
        })
    })

    const handleOrderSubmit = async () => {
        const cartRef = doc(db, 'Carts', user)
        const orderRef = doc(db, 'Orders', user)
        await getDoc(cartRef).then(docSnap2 => {
            if(docSnap2.exists()) {
                if(validateName() && validatePhone() && validateCity() && validateAddress()) {
                    const items = docSnap2.data().items
                    const orderData = {
                        items: items,
                        prixTotal: totalPrice,
                        userName: name,
                        city: city,
                        address: address,
                        dateLivraison: formattedDate.toString(),
                        heureLivraison: formattedTime.toString(),
                        createdAt: new Date(),
                    }
                    setDoc(orderRef, orderData).then(() => {
                        try {
                            deleteDoc(cartRef)
                        } catch(error) {
                            console.log(error)
                        }
                    })
                    handleOpenModal()
                }
            }
        })
    }

    const [city, setCity] = useState('')
    const [open, setOpen] = useState(false)

    const handleChange = (event) => {
        setCity(event.target.value)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

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

    function validateCity() {
        if(city === '') {
            alert('Choisissez une ville s\'il vous plaît')
            return false
        } else {
            return true
        }
    }

    function validateAddress() {
        if(address === '') {
            alert('Entrez une adresse de livraison s\'il vous plaît')
            return false
        } else {
            return true
        }
    }

    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate()
    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => {
        setOpenModal(false)
        navigate('/private/accueil')
    }
    
  return (
    <>
        <Container maxWidth="100%" sx={{ display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'center', marginTop: '50px', marginBottom: '50px'}}>
            <Typography variant='h4' style={{ textAlign: 'center' }}>
                VOTRE COMMANDE EST PRESQUE VALIDÉE !
            </Typography>
            <Card sx={{ minWidth: 400, border: '3px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <CardHeader
                    titleTypographyProps={{ variant: 'h5' }}
                    title="PRIX TOTAL"
                    subheaderTypographyProps={{ variant: 'h3' }}
                    subheader={totalPrice.toLocaleString('fr-FR', { style: 'currency' ,currency: 'EUR' })}
                >
                </CardHeader>
                <CardMedia>
                    <CheckCircleOutlineIcon sx={{ fontSize: '72px', color: green[500] }}/>
                </CardMedia>
                <CardContent>
                    <Typography variant='h7'>
                        Par chèque ou en espèces le jour de la livraison
                    </Typography>
                </CardContent>
            </Card>
            <Typography variant='h4' style={{ textAlign: 'center' }}>
                DÉTAILS POUR LA LIVRAISON
            </Typography>
            <TextField id='enter-name' label="Nom" variant='outlined' sx={{ minWidth: 400 }} value={name} onChange={handleNameChange} />
            <TextField id='enter-phone' label="Téléphone" variant='outlined' sx={{ minWidth: 400 }} value={phone} onChange={handlePhoneChange} />
            <FormControl sx={{ minWidth: 400 }}>
                <InputLabel id="select-city-label">Ville</InputLabel>
                <Select
                    labelId="select-city-label"
                    id="select-city"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={city}
                    onChange={handleChange}
                    autoWidth
                    label="Ville"
                >
                    <MenuItem value='Morlaix'>Morlaix</MenuItem>
                    <MenuItem value='Locquénolé'>Locquénolé</MenuItem>
                    <MenuItem value='Taulé'>Taulé</MenuItem>
                    <MenuItem value='Carantec'>Carantec</MenuItem>
                    <MenuItem value='Saint-Pol de Léon'>Saint-Pol de Léon</MenuItem>
                    <MenuItem value='Santec'>Santec</MenuItem>
                    <MenuItem value='Roscoff'>Roscoff</MenuItem>
                </Select>
            </FormControl>
            <TextField id='enter-address' label='Adresse' variant='outlined' sx={{ minWidth: 400 }} value={address} onChange={handleAddressChange}/>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='fr'>
                <Stack spacing={3} sx={{ minWidth: 400 }}>
                    <MobileDatePicker
                        label='Date'
                        inputFormat='DD/MM/YYYY'
                        value={value}
                        onChange={handleChangeDate}
                        minDate={minDate}
                        renderInput={(params) => <TextField {...params} />}
                    >
                    </MobileDatePicker>
                    <TimePicker
                        label='Heure'
                        value={valueTime}
                        onChange={handleChangeTime}
                        renderInput={(params) => <TextField {...params} />}
                    >
                    </TimePicker>
                </Stack>
            </LocalizationProvider>
            <Card sx={{ maxWidth: 800, cursor: 'pointer', background: 'black', color: 'white' }} onClick={() => handleOrderSubmit()}>
                <CardHeader
                    title="VALIDER MA COMMANDE"
                >
                </CardHeader>
            </Card>
        </Container>
        <Modal open={openModal} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
            <Box sx={style}>
                <Typography id='modal-modal-title' variant='h6' component='h2'>
                    Merci pour votre commande!
                </Typography>
                <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                    Nous vous contacterons au plus vite pour confirmer sa bonne réception
                </Typography>
                <Button variant="outlined" sx={{ mt: 2 }} onClick={handleCloseModal}>Fermer</Button>
            </Box>
        </Modal>
    </>
  )
}
