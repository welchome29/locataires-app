import { Typography } from '@mui/material'
import React from 'react'
import BestApero from '../../components/BestApero'
import BestFdm from '../../components/BestFdm'
import BestFruitsLeg from '../../components/BestFruitsLeg'
import BestVins from '../../components/BestVins'
import ShopNavBar from '../../components/ShopNavBar'
import Button from '@mui/material/Button'
import { blue, red, green, grey, orange } from '@mui/material/colors'
import BestPlats from '../../components/BestPlats'
import { useNavigate } from 'react-router-dom'
import BestSpiritueux from '../../components/BestSpiritueux'

export default function Shop() {
  const navigate = useNavigate()

  function handleLinkFdm() {
    navigate('/private/fruits de mer')
  }

  function handleLinkApero() {
    navigate('/private/apéro')
  }

  function handleLinkVins() {
    navigate('/private/vins')
  }

  function handleLinkFruitsLegs() {
    navigate('/private/fruits et légumes')
  }

  function handleLinkPlats() {
    navigate('/private/plats cuisinés')
  }

  function handleLinkSpiritueux() {
    navigate('/private/spiritueux')
  }

  return (
    <>
      <ShopNavBar />
      <Typography variant='h4' style={{ marginTop: '75px', marginLeft: '150px' }}>
        Les Fruits de Mer
      </Typography>
        <Button variant="contained" style={{ marginTop: '15px', marginLeft: '150px', background: blue[500] }} onClick={() => handleLinkFdm()}>
          Voir plus de produits
        </Button>
      <BestFdm />
      <Typography variant='h4' style={{ marginTop: '75px', marginLeft: '150px' }}>
        Pour l'Apéro
      </Typography>
      <Button variant="contained" style={{ marginTop: '15px', marginLeft: '150px', background: red[500] }} onClick={() => handleLinkApero()}>
        Voir plus de produits
      </Button>
      <BestApero />
      <Typography variant='h4' style={{ marginTop: '75px', marginLeft: '150px' }}>
        Vins, Champagnes et Bières
      </Typography>
      <Button variant="contained" style={{ marginTop: '15px', marginLeft: '150px', background: "#5f0937" }} onClick={() => handleLinkVins()}>
        Voir plus de produits
      </Button>
      <BestVins />
      <Typography variant='h4' style={{ marginTop: '75px', marginLeft: '150px' }}>
        Fruits et Légumes
      </Typography>
      <Button variant="contained" style={{ marginTop: '15px', marginLeft: '150px', background: green[500] }} onClick={() => handleLinkFruitsLegs()}>
        Voir plus de produits
      </Button>
      <BestFruitsLeg />
      <Typography variant='h4' style={{ marginTop: '75px', marginLeft: '150px' }}>
        Plats cuisinés
      </Typography>
      <Button variant="contained" style={{ marginTop: '15px', marginLeft: '150px', background: grey[900] }} onClick={() => handleLinkPlats()}>
        Voir plus de produits
      </Button>
      <BestPlats />
      <Typography variant='h4' style={{ marginTop: '75px', marginLeft: '150px' }}>
        Spiritueux
      </Typography>
      <Button variant="contained" style={{ marginTop: '15px', marginLeft: '150px', background: orange[500] }} onClick={() => handleLinkSpiritueux()}>
        Voir plus de produits
      </Button>
      <BestSpiritueux />
    </>
  )
}
