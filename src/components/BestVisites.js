import React, { useState } from 'react'
import { Card, CardContent, CardMedia, IconButton, Typography, Button } from '@mui/material'
import Container from '@mui/material/Container'
import CardHeader from '@mui/material/CardHeader'
import ChateauImg from '../assets/chateau-taureau.jpg'
import CallotImg from '../assets/callot.jpg'
import BatzImg from '../assets/ile-batz.jpeg'
import HikingIcon from '@mui/icons-material/Hiking'
import Tooltip from '@mui/material/Tooltip'
import { useNavigate } from 'react-router-dom'

export default function BestVisites() {
    const navigate = useNavigate()
    const [openOverlay, setOpenOverlay] = useState(false)
    const [openOverlay2, setOpenOverlay2] = useState(false)
    const [openOverlay3, setOpenOverlay3] = useState(false)

    const handleOpenResaChateau = () => navigate('/private/réservation château du taureau')
    const handleOpenCallot = () => navigate('/private/infos île callot')
    const handleOpenResaBatz = () => navigate('/private/réservation île de batz')

  return (
    <Container maxWidth="100%" sx={{ display: 'flex', justifyContent: 'center',  gap: '100px', flexWrap: 'wrap', marginTop: '25px'}}>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    action={
                        <Tooltip title="Réserver cette activité" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenResaChateau}>
                                <HikingIcon />
                            </IconButton>
                        </Tooltip>

                    }
                    title="Visite du château du taureau"
                    subheader="Carantec"
                />
                <div onMouseEnter={() => setOpenOverlay(true)} onMouseLeave={() => setOpenOverlay(false)}>
                  <CardMedia
                      component="img"
                      height="194"
                      image={ChateauImg}
                      alt="kayak"
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
                                  }}
                                  onClick={() => navigate('/private/réservation château du taureau')}
                              >
                                  Réserver cette activité
                              </Button>
                              :
                              <Typography variant="body2" color="text.secondary">
                                  En famille ou entre amis, embarquez à Carantec et découvrez ce monument incontournable de la Baie de Morlaix
                              </Typography>
                      }
                  </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    action={
                        <Tooltip title="En savoir Plus" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenCallot}>
                                <HikingIcon />
                            </IconButton>
                        </Tooltip>

                    }
                    title="Visite de lîle Callot"
                    subheader="Carantec"
                />
                <div onMouseEnter={() => setOpenOverlay2(true)} onMouseLeave={() => setOpenOverlay2(false)}>
                  <CardMedia
                      component="img"
                      height="194"
                      image={CallotImg}
                      alt="Paddle"
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
                                  }}
                                  onClick={() => navigate('/private/infos île callot')}
                              >
                                  En savoir plus
                              </Button>
                              :
                              <Typography variant="body2" color="text.secondary">
                                  Accesible à pied ou à vélo à marée basse, l'île Callot abrite une dizaine de plages de sable blanc et offre un panorama sur la Baie de Morlaix
                              </Typography>
                      }
                  </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    action={
                        <Tooltip title="Réserver cette activité" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenResaBatz}>
                                <HikingIcon />
                            </IconButton>
                        </Tooltip>

                    }
                    title="Visite de l'île de Batz"
                    subheader="Roscoff"
                />
                <div onMouseEnter={() => setOpenOverlay3(true)} onMouseLeave={() => setOpenOverlay3(false)}>
                  <CardMedia
                      component="img"
                      height="194"
                      image={BatzImg}
                      alt="île de Bat"
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
                                  }}
                                  onClick={() => navigate('/private/réservation île de batz')}
                              >
                                  Réserver cette activité
                              </Button>
                              :
                              <Typography variant="body2" color="text.secondary">
                                  Embarquez pour l'île de Batz, c'est un dépaysement garanti, à seulement quinze minutes en bateau du continent au départ de Roscoff.
                              </Typography>
                      }
                  </CardContent>
                </div>
            </Card>
        </Container>
  )
}
