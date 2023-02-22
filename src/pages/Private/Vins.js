import React, { useEffect, useState } from 'react'
import ShopNavBar from '../../components/ShopNavBar'
import { Card, CardContent, CardMedia, IconButton, Typography, Button } from '@mui/material'
import { db } from '../../firebase-config'
import { getDoc, doc, setDoc, updateDoc } from 'firebase/firestore'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import WineBarIcon from '@mui/icons-material/WineBar'
import Container from '@mui/material/Container'
import { getAuth } from 'firebase/auth'
import Tooltip from '@mui/material/Tooltip'
import Snackbar from '@mui/material/Snackbar'
import CloseIcon from '@mui/icons-material/Close'

export default function Vins() {
    const [productImg1, setProductImg1] = useState("")
    const [productName1, setProductName1] = useState("")
    const [productPrice1, setProductPrice1] = useState("")
    const [productDesc1, setProductDesc1] = useState("")
    const [productPrix1, setProductPrix1] = useState("")
    useEffect(() => {
        const docRef1 = doc(db, 'Products', 'G4Csu4XKsMFejbrxNX5y')
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
        const docRef2 = doc(db, 'Products', 'PuAcTZQXCvjFY8X9qfVM')
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
        const docRef3 = doc(db, 'Products', '8vL4Yb6IttNWzDPHtjcp')
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

    const [productImg4, setProductImg4] = useState("")
    const [productName4, setProductName4] = useState("")
    const [productPrice4, setProductPrice4] = useState("")
    const [productDesc4, setProductDesc4] = useState("")
    const [productPrix4, setProductPrix4] = useState("")
    useEffect(() => {
        const docRef4 = doc(db, 'Products', 'asZOMR9upqksgyvSI1j1')
        getDoc(docRef4).then(docSnap4 => {
            if(docSnap4.exists()) {
                setProductImg4(docSnap4.get('img_url'))
                setProductName4(docSnap4.get('name'))
                setProductPrice4(docSnap4.get('price'))
                setProductDesc4(docSnap4.get('description'))
                setProductPrix4(docSnap4.get('prix'))
            }
        })
    }, [])

    const [productImg5, setProductImg5] = useState("")
    const [productName5, setProductName5] = useState("")
    const [productPrice5, setProductPrice5] = useState("")
    const [productDesc5, setProductDesc5] = useState("")
    const [productPrix5, setProductPrix5] = useState("")
    useEffect(() => {
        const docRef5 = doc(db, 'Products', 'uaOxhyoV1jG9X171mDlf')
        getDoc(docRef5).then(docSnap5 => {
            if(docSnap5.exists()) {
                setProductImg5(docSnap5.get('img_url'))
                setProductName5(docSnap5.get('name'))
                setProductPrice5(docSnap5.get('price'))
                setProductDesc5(docSnap5.get('description'))
                setProductPrix5(docSnap5.get('prix'))
            }
        })
    }, [])

    const [productImg6, setProductImg6] = useState("")
    const [productName6, setProductName6] = useState("")
    const [productPrice6, setProductPrice6] = useState("")
    const [productDesc6, setProductDesc6] = useState("")
    const [productPrix6, setProductPrix6] = useState("")
    useEffect(() => {
        const docRef6 = doc(db, 'Products', 'wD0RLyKCXWLoQvauLMPy')
        getDoc(docRef6).then(docSnap6 => {
            if(docSnap6.exists()) {
                setProductImg6(docSnap6.get('img_url'))
                setProductName6(docSnap6.get('name'))
                setProductPrice6(docSnap6.get('price'))
                setProductDesc6(docSnap6.get('description'))
                setProductPrix6(docSnap6.get('prix'))
            }
        })
    }, [])

    const [productImg7, setProductImg7] = useState("")
    const [productName7, setProductName7] = useState("")
    const [productPrice7, setProductPrice7] = useState("")
    const [productDesc7, setProductDesc7] = useState("")
    const [productPrix7, setProductPrix7] = useState("")
    useEffect(() => {
        const docRef7 = doc(db, 'Products', '7ZIvEIQ9i286q5FoEYwu')
        getDoc(docRef7).then(docSnap7 => {
            if(docSnap7.exists()) {
                setProductImg7(docSnap7.get('img_url'))
                setProductName7(docSnap7.get('name'))
                setProductPrice7(docSnap7.get('price'))
                setProductDesc7(docSnap7.get('description'))
                setProductPrix7(docSnap7.get('prix'))
            }
        })
    }, [])

    const [productImg8, setProductImg8] = useState("")
    const [productName8, setProductName8] = useState("")
    const [productPrice8, setProductPrice8] = useState("")
    const [productDesc8, setProductDesc8] = useState("")
    const [productPrix8, setProductPrix8] = useState("")
    useEffect(() => {
        const docRef8 = doc(db, 'Products', 'MT9PciTnRIUfitz33Zwg')
        getDoc(docRef8).then(docSnap8 => {
            if(docSnap8.exists()) {
                setProductImg8(docSnap8.get('img_url'))
                setProductName8(docSnap8.get('name'))
                setProductPrice8(docSnap8.get('price'))
                setProductDesc8(docSnap8.get('description'))
                setProductPrix8(docSnap8.get('prix'))
            }
        })
    }, [])

    const [productImg9, setProductImg9] = useState("")
    const [productName9, setProductName9] = useState("")
    const [productPrice9, setProductPrice9] = useState("")
    const [productDesc9, setProductDesc9] = useState("")
    const [productPrix9, setProductPrix9] = useState("")
    useEffect(() => {
        const docRef9 = doc(db, 'Products', '0apThClS7ruJD6Q8GpMu')
        getDoc(docRef9).then(docSnap9 => {
            if(docSnap9.exists()) {
                setProductImg9(docSnap9.get('img_url'))
                setProductName9(docSnap9.get('name'))
                setProductPrice9(docSnap9.get('price'))
                setProductDesc9(docSnap9.get('description'))
                setProductPrix9(docSnap9.get('prix'))
            }
        })
    }, [])

    const [productImg10, setProductImg10] = useState("")
    const [productName10, setProductName10] = useState("")
    const [productPrice10, setProductPrice10] = useState("")
    const [productDesc10, setProductDesc10] = useState("")
    const [productPrix10, setProductPrix10] = useState("")
    useEffect(() => {
        const docRef10 = doc(db, 'Products', 'DdzvnQEsLSIDDINrN5Hv')
        getDoc(docRef10).then(docSnap10 => {
            if(docSnap10.exists()) {
                setProductImg10(docSnap10.get('img_url'))
                setProductName10(docSnap10.get('name'))
                setProductPrice10(docSnap10.get('price'))
                setProductDesc10(docSnap10.get('description'))
                setProductPrix10(docSnap10.get('prix'))
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

    const [openOverlay, setOpenOverlay] = useState(false)
    const [openOverlay2, setOpenOverlay2] = useState(false)
    const [openOverlay3, setOpenOverlay3] = useState(false)
    const [openOverlay4, setOpenOverlay4] = useState(false)
    const [openOverlay5, setOpenOverlay5] = useState(false)
    const [openOverlay6, setOpenOverlay6] = useState(false)
    const [openOverlay7, setOpenOverlay7] = useState(false)
    const [openOverlay8, setOpenOverlay8] = useState(false)
    const [openOverlay9, setOpenOverlay9] = useState(false)
    const [openOverlay10, setOpenOverlay10] = useState(false)

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
    <>
        <ShopNavBar />
        <Typography variant='h4' style={{ marginTop: '50px', textAlign: 'center' }}>
            VINS, CHAMPAGNES ET BIÈRES
        </Typography>
        <Container maxWidth="100%" sx={{ display: 'flex', justifyContent: 'center',  gap: '100px', marginTop: '50px', flexWrap: 'wrap', marginBottom: '50px'}}>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: '#5f0937' }} aria-label="recipe">
                            <WineBarIcon />
                        </Avatar>
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
                                          addToCart({ name: productName1, price: productPrix1, img_url: productImg1 })}>
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
                        <Avatar sx={{ bgcolor: "#5f0937" }} aria-label="recipe">
                            <WineBarIcon />
                        </Avatar>
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
                        <Avatar sx={{ bgcolor: "#5f0937" }} aria-label="recipe">
                            <WineBarIcon />
                        </Avatar>
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
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "#5f0937" }} aria-label="recipe">
                            <WineBarIcon />
                        </Avatar>
                    }
                    action={
                        <>
                            <Tooltip title="Ajouter l'article au panier" sx={{ cursor: 'pointer' }}>
                                <IconButton onClick={() => addToCart({ name: productName4, price: productPrix4, img_url: productImg4 })}>
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
                    title={productName4}
                    subheader={productPrice4}
                />
                <div onMouseEnter={() => setOpenOverlay4(true)} onMouseLeave={() => setOpenOverlay4(false)}>
                      <CardMedia
                          component="img"
                          height="194"
                          image={productImg4}
                          alt={productName4}
                      />
                      <CardContent>
                          {
                              openOverlay4
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
                                      onClick={() => addToCart({ name: productName4, price: productPrix4, img_url: productImg4 })}
                                  >
                                      Ajouter au panier
                                  </Button>
                                  :
                                  <Typography variant="body2" color="text.secondary">
                                      {productDesc4}
                                  </Typography>
                          }
                      </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "#5f0937" }} aria-label="recipe">
                            <WineBarIcon />
                        </Avatar>
                    }
                    action={
                        <>
                            <Tooltip title="Ajouter l'article au panier" sx={{ cursor: 'pointer' }}>
                                <IconButton onClick={() => addToCart({ name: productName5, price: productPrix5, img_url: productImg5 })}>
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
                    title={productName5}
                    subheader={productPrice5}
                />
                <div onMouseEnter={() => setOpenOverlay5(true)} onMouseLeave={() => setOpenOverlay5(false)}>
                      <CardMedia
                          component="img"
                          height="194"
                          image={productImg5}
                          alt={productName5}
                      />
                      <CardContent>
                          {
                              openOverlay5
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
                                      onClick={() => addToCart({ name: productName5, price: productPrix5, img_url: productImg5 })}
                                  >
                                      Ajouter au panier
                                  </Button>
                                  :
                                  <Typography variant="body2" color="text.secondary">
                                      {productDesc5}
                                  </Typography>
                          }
                      </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "#5f0937" }} aria-label="recipe">
                            <WineBarIcon />
                        </Avatar>
                    }
                    action={
                        <>
                            <Tooltip title="Ajouter l'article au panier" sx={{ cursor: 'pointer' }}>
                                <IconButton onClick={() => addToCart({ name: productName6, price: productPrix6, img_url: productImg6 })}>
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
                    title={productName6}
                    subheader={productPrice6}
                />
                <div onMouseEnter={() => setOpenOverlay6(true)} onMouseLeave={() => setOpenOverlay6(false)}>
                      <CardMedia
                          component="img"
                          height="194"
                          image={productImg6}
                          alt={productName6}
                      />
                      <CardContent>
                          {
                              openOverlay6
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
                                      onClick={() => addToCart({ name: productName6, price: productPrix6, img_url: productImg6 })}
                                  >
                                      Ajouter au panier
                                  </Button>
                                  :
                                  <Typography variant="body2" color="text.secondary">
                                      {productDesc6}
                                  </Typography>
                          }
                      </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "#5f0937" }} aria-label="recipe">
                            <WineBarIcon />
                        </Avatar>
                    }
                    action={
                        <>
                            <Tooltip title="Ajouter l'article au panier" sx={{ cursor: 'pointer' }}>
                                <IconButton onClick={() => addToCart({ name: productName7, price: productPrix7, img_url: productImg7 })}>
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
                    title={productName7}
                    subheader={productPrice7}
                />
                <div onMouseEnter={() => setOpenOverlay7(true)} onMouseLeave={() => setOpenOverlay7(false)}>
                      <CardMedia
                          component="img"
                          height="194"
                          image={productImg7}
                          alt={productName7}
                      />
                      <CardContent>
                          {
                              openOverlay7
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
                                      onClick={() => addToCart({ name: productName7, price: productPrix7, img_url: productImg7 })}
                                  >
                                      Ajouter au panier
                                  </Button>
                                  :
                                  <Typography variant="body2" color="text.secondary">
                                      {productDesc7}
                                  </Typography>
                          }
                      </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "#5f0937" }} aria-label="recipe">
                            <WineBarIcon />
                        </Avatar>
                    }
                    action={
                        <>
                            <Tooltip title="Ajouter l'article au panier" sx={{ cursor: 'pointer' }}>
                                <IconButton onClick={() => addToCart({ name: productName8, price: productPrix8, img_url: productImg8 })}>
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
                    title={productName8}
                    subheader={productPrice8}
                />
                <div onMouseEnter={() => setOpenOverlay8(true)} onMouseLeave={() => setOpenOverlay8(false)}>
                      <CardMedia
                          component="img"
                          height="194"
                          image={productImg8}
                          alt={productName8}
                      />
                      <CardContent>
                          {
                              openOverlay8
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
                                      onClick={() => addToCart({ name: productName8, price: productPrix8, img_url: productImg8 })}
                                  >
                                      Ajouter au panier
                                  </Button>
                                  :
                                  <Typography variant="body2" color="text.secondary">
                                      {productDesc8}
                                  </Typography>
                          }
                      </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "#5f0937" }} aria-label="recipe">
                            <WineBarIcon />
                        </Avatar>
                    }
                    action={
                        <>
                            <Tooltip title="Ajouter l'article au panier" sx={{ cursor: 'pointer' }}>
                                <IconButton onClick={() => addToCart({ name: productName9, price: productPrix9, img_url: productImg9 })}>
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
                    title={productName9}
                    subheader={productPrice9}
                />
                <div onMouseEnter={() => setOpenOverlay9(true)} onMouseLeave={() => setOpenOverlay9(false)}>
                      <CardMedia
                          component="img"
                          height="194"
                          image={productImg9}
                          alt={productName9}
                      />
                      <CardContent>
                          {
                              openOverlay9
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
                                      onClick={() => addToCart({ name: productName9, price: productPrix9, img_url: productImg9 })}
                                  >
                                      Ajouter au panier
                                  </Button>
                                  :
                                  <Typography variant="body2" color="text.secondary">
                                      {productDesc9}
                                  </Typography>
                          }
                      </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "#5f0937" }} aria-label="recipe">
                            <WineBarIcon />
                        </Avatar>
                    }
                    action={
                        <>
                            <Tooltip title="Ajouter l'article au panier" sx={{ cursor: 'pointer' }}>
                                <IconButton onClick={() => addToCart({ name: productName10, price: productPrix10, img_url: productImg10 })}>
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
                    title={productName10}
                    subheader={productPrice10}
                />
                <div onMouseEnter={() => setOpenOverlay10(true)} onMouseLeave={() => setOpenOverlay10(false)}>
                      <CardMedia
                          component="img"
                          height="194"
                          image={productImg10}
                          alt={productName10}
                      />
                      <CardContent>
                          {
                              openOverlay10
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
                                      onClick={() => addToCart({ name: productName10, price: productPrix10, img_url: productImg10 })}
                                  >
                                      Ajouter au panier
                                  </Button>
                                  :
                                  <Typography variant="body2" color="text.secondary">
                                      {productDesc10}
                                  </Typography>
                          }
                      </CardContent>
                </div>
            </Card>
        </Container>
    </>
  )
}
