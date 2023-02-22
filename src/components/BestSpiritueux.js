import React, { useEffect, useState } from 'react'
import { getDoc, doc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase-config'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardMedia, IconButton, Typography, Button } from '@mui/material'
import Snackbar from '@mui/material/Snackbar'
import CloseIcon from '@mui/icons-material/Close'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Container from '@mui/material/Container'
import Tooltip from '@mui/material/Tooltip'
import { orange } from '@mui/material/colors'
import LiquorIcon from '@mui/icons-material/Liquor'

export default function BestSpiritueux() {
    const [productImg1, setProductImg1] = useState("")
    const [productName1, setProductName1] = useState("")
    const [productPrice1, setProductPrice1] = useState("")
    const [productDesc1, setProductDesc1] = useState("")
    const [productPrix1, setProductPrix1] = useState("")
    useEffect(() => {
        const docRef1 = doc(db, 'Products', 'WKwzw07kWa4qWUHQ2y66')
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
    const handleOpenSpiritCat = () => navigate('/private/spiritueux')

    const [openOverlay, setOpenOverlay] = useState(false)

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
    <Container maxWidth="100%" sx={{ display: 'flex', justifyContent: 'center',  gap: '100px', marginTop: '25px', marginBottom: '50px', flexWrap: 'wrap' }}>
        <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    avatar={
                        <Tooltip title="Accéder à la catégorie Spiritueux">
                          <Avatar sx={{ bgcolor: orange[500], cursor: 'pointer' }} aria-label="recipe" onClick={handleOpenSpiritCat}>
                              <LiquorIcon />
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
                                bodyStyle={{ bgcolor: orange[500] }}
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
                                          bgcolor: orange[500],
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
    </Container>
  )
}
