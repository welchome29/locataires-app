import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, IconButton, Typography, Button } from '@mui/material'
import { db } from '../firebase-config'
import { getDoc, doc, setDoc, updateDoc } from 'firebase/firestore'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Container from '@mui/material/Container'
import WineBarIcon from '@mui/icons-material/WineBar'
import { getAuth } from 'firebase/auth'
import Tooltip from '@mui/material/Tooltip'
import { useNavigate } from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar'
import CloseIcon from '@mui/icons-material/Close'

export default function BestVins() {
    const [productImg1, setProductImg1] = useState("")
    const [productName1, setProductName1] = useState("")
    const [productPrice1, setProductPrice1] = useState("")
    const [productDesc1, setProductDesc1] = useState("")
    const [productPrix1, setProductPrix1] = useState("")
    useEffect(() => {
        const docRef1 = doc(db, 'Products', 'MT9PciTnRIUfitz33Zwg')
        getDoc(docRef1).then(docSnap1 => {
            if(docSnap1.exists()) {
                setProductImg1(docSnap1.get('img_url'))
                setProductName1(docSnap1.get('name'))
                setProductPrice1(docSnap1.get('price'))
                setProductDesc1(docSnap1.get('description'))
                setProductPrix1(docSnap1.get('prix'))
            }
        })
    }, [])

    const [productImg2, setProductImg2] = useState("")
    const [productName2, setProductName2] = useState("")
    const [productPrice2, setProductPrice2] = useState("")
    const [productDesc2, setProductDesc2] = useState("")
    const [productPrix2, setProductPrix2] = useState("")
    useEffect(() => {
        const docRef2 = doc(db, 'Products', 'asZOMR9upqksgyvSI1j1')
        getDoc(docRef2).then(docSnap2 => {
            if(docSnap2.exists()) {
                setProductImg2(docSnap2.get('img_url'))
                setProductName2(docSnap2.get('name'))
                setProductPrice2(docSnap2.get('price'))
                setProductDesc2(docSnap2.get('description'))
                setProductPrix2(docSnap2.get('prix'))
            }
        })
    }, [])

    const [productImg3, setProductImg3] = useState("")
    const [productName3, setProductName3] = useState("")
    const [productPrice3, setProductPrice3] = useState("")
    const [productDesc3, setProductDesc3] = useState("")
    const [productPrix3, setProductPrix3] = useState("")
    useEffect(() => {
        const docRef3 = doc(db, 'Products', 'DdzvnQEsLSIDDINrN5Hv')
        getDoc(docRef3).then(docSnap3 => {
            if(docSnap3.exists()) {
                setProductImg3(docSnap3.get('img_url'))
                setProductName3(docSnap3.get('name'))
                setProductPrice3(docSnap3.get('price'))
                setProductDesc3(docSnap3.get('description'))
                setProductPrix3(docSnap3.get('prix'))
            }
        })
    }, [])

    const auth = getAuth()
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addToCart = async (product) => {
        product.quantity = 1
        setCartItems([...cartItems, product])
        setTotalPrice(totalPrice + product.price)
        const user = auth.currentUser.uid
        const cartRef = doc(db, 'Carts', user)
        const docSnap4 = await getDoc(cartRef)
        if(docSnap4.exists()) {
            updateDoc(cartRef, {
                items: docSnap4.data().items.concat([product]),
                totalPrice: docSnap4.data().totalPrice + product.price
            })
        } else {
            setDoc(cartRef, {
                items: [product],
                totalPrice: product.price
            })
        }
        setOpen(true)
    }

    const handleClose = (event, reason) => {
        if(reason === 'clickaway') {
            return
        }
        setOpen(false)
    }

    const navigate = useNavigate()
    const handleOpenVinsCat = () => navigate('/private/vins')

    const [openOverlay, setOpenOverlay] = useState(false)
    const [openOverlay2, setOpenOverlay2] = useState(false)
    const [openOverlay3, setOpenOverlay3] = useState(false)

    const [open, setOpen] = useState(false)

    const actionSnack = (
        <React.Fragment>
            <IconButton
                size='small'
                aria-label='close'
                color='white'
                onClick={handleClose}
            >
                <CloseIcon fontSize='small' style={{ color: 'white' }}/>
            </IconButton>
        </React.Fragment>
    )

  return (
    <Container maxWidth="100%" sx={{ display: 'flex', justifyContent: 'center',  gap: '100px', marginTop: '25px', flexWrap: 'wrap'}}>
        <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    avatar={
                        <Tooltip title="Accéder à la catégorie Vins, Champagnes & Bières">
                          <Avatar sx={{ bgcolor: "#5f0937", cursor: 'pointer' }} aria-label="recipe" onClick={handleOpenVinsCat}>
                              <WineBarIcon />
                          </Avatar>
                        </Tooltip>
                    }
                    action={
                        <>
                            <Tooltip title="Ajouter l'article au panier" sx={{ cursor: 'pointer' }}>
                                <IconButton onClick={() => addToCart({ name: productName1, price: productPrix1, img_url: productImg1 })}>
                                    <AddShoppingCartIcon />
                                </IconButton>
                            </Tooltip>
                            <Snackbar
                                open={open}
                                autoHideDuration={10000}
                                onClose={handleClose}
                                message='Ajouté au panier avec succès'
                                action={actionSnack}
                                bodyStyle={{ bgcolor: '#5f0937' }}
                            />
                        </>
                    }
                    title={productName1}
                    subheader={productPrice1}
                />
                <div onMouseEnter={() => setOpenOverlay(true)} onMouseLeave={() => setOpenOverlay(false)}>
                  <CardMedia
                      component="img"
                      height="194"
                      image={productImg1}
                      alt={productName1}
                  />
                  <CardContent>
                      {
                          openOverlay
                              ?
                              <Button
                                  variant='contained' sx={{
                                      width: '100%',
                                      background: 'black',
                                      color: 'white',
                                      paddingY: 2,
                                      '&:hover': {
                                          bgcolor: '#5f0937',
                                      }
                                  }}
                                  onClick={() =>
                                      addToCart({ name: productName1, price: productPrix1, img_url: productImg1 })}
                              >
                                  Ajouter au panier
                              </Button>
                              :
                              <Typography variant="body2" color="text.secondary">
                                  {productDesc1}
                              </Typography>
                      }
                  </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    avatar={
                        <Tooltip title="Accéder à la catégorie Vins, Champagnes & Bières">
                          <Avatar sx={{ bgcolor: "#5f0937", cursor: 'pointer' }} aria-label="recipe" onClick={handleOpenVinsCat}>
                              <WineBarIcon />
                          </Avatar>
                        </Tooltip>
                    }
                    action={
                        <>
                            <Tooltip title="Ajouter l'article au panier" sx={{ cursor: 'pointer' }}>
                                <IconButton onClick={() => addToCart({ name: productName2, price: productPrix2, img_url: productImg2 })}>
                                    <AddShoppingCartIcon />
                                </IconButton>
                            </Tooltip>
                            <Snackbar
                                open={open}
                                autoHideDuration={10000}
                                onClose={handleClose}
                                message='Ajouté au panier avec succès'
                                action={actionSnack}
                                bodyStyle={{ bgcolor: "#5f0937" }}
                            />
                        </>

                    }
                    title={productName2}
                    subheader={productPrice2}
                />
                <div onMouseEnter={() => setOpenOverlay2(true)} onMouseLeave={() => setOpenOverlay2(false)}>
                <CardMedia
                    component="img"
                    height="194"
                    image={productImg2}
                    alt={productName2}
                />
                <CardContent>
                      {
                          openOverlay2
                              ?

                              <Button
                                  variant='contained' sx={{
                                      width: '100%',
                                      background: 'black',
                                      color: 'white',
                                      paddingY: 2,
                                      '&:hover': {
                                          bgcolor: "#5f0937",
                                      }
                                  }}
                                  onClick={() => addToCart({ name: productName2, price: productPrix2, img_url: productImg2 })}
                              >
                                  Ajouter au panier
                              </Button>
                              :
                              <Typography variant="body2" color="text.secondary">
                                  {productDesc2}
                              </Typography>
                      }
                </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    avatar={
                        <Tooltip title="Accéder à la catégorie Vins, Champagnes & Bières">
                          <Avatar sx={{ bgcolor: "#5f0937", cursor: 'pointer' }} aria-label="recipe" onClick={handleOpenVinsCat}>
                              <WineBarIcon />
                          </Avatar>
                        </Tooltip>
                    }
                    action={
                        <>
                            <Tooltip title="Ajouter l'article au panier" sx={{ cursor: 'pointer' }}>
                                <IconButton onClick={() => addToCart({ name: productName3, price: productPrix3, img_url: productImg3 })}>
                                    <AddShoppingCartIcon />
                                </IconButton>
                            </Tooltip>
                            <Snackbar
                                open={open}
                                autoHideDuration={10000}
                                onClose={handleClose}
                                message='Ajouté au panier avec succès'
                                action={actionSnack}
                                bodyStyle={{ bgcolor: "#5f0937" }}
                            />
                        </>
                    }
                    title={productName3}
                    subheader={productPrice3}
                />
                <div onMouseEnter={() => setOpenOverlay3(true)} onMouseLeave={() => setOpenOverlay3(false)}>
                <CardMedia
                    component="img"
                    height="194"
                    image={productImg3}
                    alt={productName3}
                />
                <CardContent>
                      {
                          openOverlay3
                              ?
                              <Button
                                  variant='contained' sx={{
                                      width: '100%',
                                      background: 'black',
                                      color: 'white',
                                      paddingY: 2,
                                      '&:hover': {
                                          bgcolor: "#5f0937",
                                      }
                                  }}
                                  onClick={() => addToCart({ name: productName3, price: productPrix3, img_url: productImg3 })}
                              >
                                  Ajouter au panier
                              </Button>
                              :
                              <Typography variant="body2" color="text.secondary">
                                  {productDesc3}
                              </Typography>
                      }
                </CardContent>
                </div>  
            </Card>
        </Container>
  )
}
