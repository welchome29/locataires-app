import React from 'react'
import LoisirsNavBar from '../../components/LoisirsNavBar'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { blue, red, green, grey } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'
import BestSportsNautiques from '../../components/BestSportsNautiques'
import BestVisites from '../../components/BestVisites'
import BestPeche from '../../components/BestPeche'
import BestBienEtre from '../../components/BestBienEtre'
import BestVelo from '../../components/BestVelo'

export default function Loisirs() {
  const navigate = useNavigate()

  function handleLinkSportsNautiques() {
    navigate('/private/sports nautiques')
  }

  function handleLinkVisites() {
    navigate('/private/visites')
  }

  function handleLinkPeche() {
    navigate('/private/pêche')
  }

  function handleLinkBienEtre() {
    navigate('/private/bien-être')
  }

  function handleLinkLocationVelos() {
    navigate('/private/location de vélos')
  }

  return (
    <>
      <LoisirsNavBar />
      <Typography variant='h4' style={{ marginTop: '75px', marginLeft: '150px' }}>
        Les Meilleurs Sports Nautiques
      </Typography>
      <Button variant="contained" style={{ marginTop: '15px', marginLeft: '150px', background: blue[500] }} onClick={() => handleLinkSportsNautiques()}>
        Voir plus
      </Button>
      <BestSportsNautiques />
      <Typography variant='h4' style={{ marginTop: '75px', marginLeft: '150px' }}>
        Les Visites
      </Typography>
      <Button variant="contained" style={{ marginTop: '15px', marginLeft: '150px', background: red[500] }} onClick={() => handleLinkVisites()}>
        Voir plus
      </Button>
      <BestVisites />
      <Typography variant='h4' style={{ marginTop: '75px', marginLeft: '150px' }}>
        Les sorties de Pêche
      </Typography>
      <Button variant="contained" style={{ marginTop: '15px', marginLeft: '150px', background: "#5f0937" }} onClick={() => handleLinkPeche()}>
        Voir plus
      </Button>
      <BestPeche />
      <Typography variant='h4' style={{ marginTop: '75px', marginLeft: '150px' }}>
        Les Prestations Bien-être
      </Typography>
      <Button variant="contained" style={{ marginTop: '15px', marginLeft: '150px', background: green[500] }} onClick={() => handleLinkBienEtre()}>
        Voir plus
      </Button>
      <BestBienEtre />
      <Typography variant='h4' style={{ marginTop: '75px', marginLeft: '150px' }}>
        Les Locations de Vélos
      </Typography>
      <Button variant="contained" style={{ marginTop: '15px', marginLeft: '150px', background: grey[900] }} onClick={() => handleLinkLocationVelos()}>
        Voir plus
      </Button>
      <BestVelo />
    </>
  )
}
