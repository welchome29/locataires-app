import React, { useState } from 'react'
import { Card, CardContent, CardMedia, IconButton, Typography, Button } from '@mui/material'
import Container from '@mui/material/Container'
import CardHeader from '@mui/material/CardHeader'
import KayakingIcon from '@mui/icons-material/Kayaking'
import KayakImg from '../assets/kayak.jpg'
import PaddleImg from '../assets/paddle.jpg'
import CataImg from '../assets/cata.jpg'
import Tooltip from '@mui/material/Tooltip'
import { useNavigate } from 'react-router-dom'

export default function BestSportsNautiques() {
    const navigate = useNavigate()
    const [openOverlay, setOpenOverlay] = useState(false)
    const [openOverlay2, setOpenOverlay2] = useState(false)
    const [openOverlay3, setOpenOverlay3] = useState(false)
    const handleOpenResaKayak = () => navigate('/private/réservation kayak')
    const handleOpenResaPaddle = () => navigate('/private/réservation paddle')
    const handleOpenResaCatamaran = () => navigate('/private/réservation Catamaran')

  return (
    <Container maxWidth="100%" sx={{ display: 'flex', justifyContent: 'center',  gap: '100px', flexWrap: 'wrap', marginTop: '25px'}}>
            <Card sx={{ maxWidth: 400, border: '1px solid lightgray', minWidth: 400 }}>
                <CardHeader
                    action={
                        <Tooltip title="Réserver cette activité" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenResaKayak}>
                                <KayakingIcon />
                            </IconButton>
                        </Tooltip>

                    }
                    title="Location de kayak"
                    subheader="Roscoff ou Carantec"
                />
                <div onMouseEnter={() => setOpenOverlay(true)} onMouseLeave={() => setOpenOverlay(false)}>
                  <CardMedia
                      component="img"
                      height="194"
                      image={KayakImg}
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
                                  onClick={() => navigate('/private/réservation kayak')}
                              >
                                  Réserver cette activité
                              </Button>
                              :
                              <Typography variant="body2" color="text.secondary">
                                  Envie d'une escapade en Baie de Morlaix ? De l'île Callot à l'île Louêt, naviguez de façon autonome sur un plan d'eau surveillé.
                              </Typography>
                    }
                  </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, border: '1px solid lightgray', minWidth: 400 }}>
                <CardHeader
                    action={
                        <Tooltip title="Réserver cette activité" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenResaPaddle}>
                                <KayakingIcon />
                            </IconButton>
                        </Tooltip>

                    }
                    title="Location de Paddle"
                    subheader="Carantec ou Roscoff"
                />
                <div onMouseEnter={() => setOpenOverlay2(true)} onMouseLeave={() => setOpenOverlay2(false)}>
                  <CardMedia
                      component="img"
                      height="194"
                      image={PaddleImg}
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
                                  onClick={() => navigate('/private/réservation paddle')}
                              >
                                  Réserver cette activité
                              </Button>
                              :
                              <Typography variant="body2" color="text.secondary">
                                  Profitez d'un bon bol d'air. Les gilets et les combinaisons sont également fournis.
                              </Typography>
                      }
                  </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, border: '1px solid lightgray', minWidth: 400 }}>
                <CardHeader
                    action={
                        <Tooltip title="Réserver cette activité" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenResaCatamaran}>
                                <KayakingIcon />
                            </IconButton>
                        </Tooltip>

                    }
                    title="Location de Catamaran"
                    subheader="Carantec"
                />
                <div onMouseEnter={() => setOpenOverlay3(true)} onMouseLeave={() => setOpenOverlay3(false)}>
                  <CardMedia
                      component="img"
                      height="194"
                      image={CataImg}
                      alt="Catamaran"
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
                                  onClick={() => navigate('/private/réservation catamaran')}
                              >
                                  Réserver cette activité
                              </Button>
                              :
                              <Typography variant="body2" color="text.secondary">
                                  Faciles à gérer, les catamarans SL 5.2 sont disponibles pour une pratique de la voile en loisir.
                              </Typography>
                      }
                  </CardContent>
                </div>
            </Card>
        </Container>
  )
}
