import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import CardHeader from '@mui/material/CardHeader'
import { getAuth } from 'firebase/auth'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase-config'
import QuantityControl from '../../components/QuantityControl'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import Tooltip from '@mui/material/Tooltip'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const auth = getAuth()
    const user = auth.currentUser.uid
    const cartRef = doc(db, 'Carts', user)
    const getCartItems = async () => {
      const docSnap = await getDoc(cartRef)
      if(docSnap.exists()) {
        setCartItems(docSnap.data().items)
        setTotalPrice(docSnap.data().totalPrice)
      }
    }
    getCartItems()
  }, [])

  const handleQuantityChange = async (index, quantity) => {
    const updatedCartItems = [...cartItems]
    updatedCartItems[index].quantity = quantity
    setCartItems(updatedCartItems)
    setTotalPrice(updatedCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0))
    const auth = getAuth()
    const user = auth.currentUser.uid
    const cartRef = doc(db, 'Carts', user)
    await updateDoc(cartRef, {
      items: updatedCartItems,
      totalPrice: updatedCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    })
  }

  const handleDeleteItem = async (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    setTotalPrice(updatedCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0))
    const auth = getAuth()
    const user = auth.currentUser.uid
    const cartRef = doc(db, 'Carts', user)
    await updateDoc(cartRef, {
      items: updatedCartItems,
      totalPrice: updatedCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    })
  }

  const shippingCostPrint = (totalPrice < 40) ? 20 : 0
  const newTotalPricePrint = totalPrice + shippingCostPrint

  const handleValidateCart = async () => {
    const shippingCost = (totalPrice < 40) ? 20 : 0
    const newTotalPrice = totalPrice + shippingCost
    const auth = getAuth()
    const user = auth.currentUser.uid
    const cartRef = doc(db, 'Carts', user)
    await updateDoc(cartRef, {
      totalPrice: newTotalPrice
    })
    navigate('/private/cartvalidate')
  }

  return (
    <>
      <Container maxWidth="100%" sx={{ display: 'flex', flexDirection: 'column', gap: '50px', alignItems: 'center', marginTop: '50px', marginBottom: '50px'}}>
        <Typography variant='h4' style={{ textAlign: 'center' }}>
            MON PANIER
        </Typography>
        {cartItems.map((item, index) => {
          return (
            <Card key={index} sx={{ minWidth: '60%', border: '1px solid lightgray' }}>
              <CardHeader
                title={item.name}
                subheader={item.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR'})}
              >
              </CardHeader>
              <CardMedia
                component="img"
                height="194"
                image={item.img_url}
                alt={item.name}
              />
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <QuantityControl value={item.quantity} onChange={(quantity) => handleQuantityChange(index, quantity)}/>
                <Tooltip title="Supprimer l'article" sx={{ cursor: 'pointer', marginLeft: '50px', fontSize: '32px' }}>
                  <DeleteOutlineIcon onClick={() => handleDeleteItem(index)}/>
                </Tooltip>
              </CardContent>
            </Card>
          )
        })}
        <Card sx={{ minWidth: '60%', border: '3px solid black' }}>
          <CardHeader
            title="FRAIS DE LIVRAISON"
            subheader={shippingCostPrint.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR'})}
          >
          </CardHeader>
        </Card>
        <Card sx={{ maxWidth: 800, border: '3px solid black' }}>
          <CardHeader
            title="PRIX TOTAL DE VOTRE COMMANDE"
            subheader={newTotalPricePrint.toLocaleString('fr-Fr', { style: 'currency', currency: 'EUR' })}
          >
          </CardHeader>
        </Card>
        <Card sx={{ maxWidth: 800, cursor: 'pointer', background: 'black', color: 'white' }} onClick={handleValidateCart}>
          <CardHeader
            title="VALIDER MON PANIER"
          >
          </CardHeader>
        </Card>
      </Container>
    </>
  )
}
