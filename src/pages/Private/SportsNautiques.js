import React, { useState } from 'react'
import LoisirsNavBar from '../../components/LoisirsNavBar'
import { Card, CardContent, CardMedia, IconButton, Typography, Button } from '@mui/material'
import CardHeader from '@mui/material/CardHeader'
import Container from '@mui/material/Container'
import Tooltip from '@mui/material/Tooltip'
import KayakingIcon from '@mui/icons-material/Kayaking'
import KayakImg from '../../assets/kayak.jpg'
import PaddleImg from '../../assets/paddle.jpg'
import CataImg from '../../assets/cata.jpg'
import DeriveurImg from '../../assets/deriveur.jpg'
import PlancheImg from '../../assets/planche.jpg'
import TrimaranImg from '../../assets/trimaran.jpg'
import { useNavigate } from 'react-router-dom'

export default function SportsNautiques() {
    const navigate = useNavigate()
    const [openOverlay, setOpenOverlay] = useState(false)
    const [openOverlay2, setOpenOverlay2] = useState(false)
    const [openOverlay3, setOpenOverlay3] = useState(false)
    const [openOverlay4, setOpenOverlay4] = useState(false)
    const [openOverlay5, setOpenOverlay5] = useState(false)
    const [openOverlay6, setOpenOverlay6] = useState(false)
    const handleOpenResaKayak = () => navigate('/private/réservation kayak')
    const handleOpenResaPaddle = () => navigate('/private/réservation paddle')
    const handleOpenResaCatamaran = () => navigate('/private/réservation catamaran')
    const handleOpenResaDeriveur = () => navigate('/private/réservation dériveur')
    const handleOpenResaPlanche = () => navigate('/private/réservation planche à voile')
    const handleOpenResaTrimaran = () => navigate('/private/réservation trimaran')

  return (
    <>
      <LoisirsNavBar />
      <Typography variant='h4' style={{ marginTop: '50px', textAlign: 'center' }}>
            LES SPORTS NAUTIQUES
      </Typography>
      <Container maxWidth="100%" sx={{ display: 'flex', justifyContent: 'center',  gap: '100px', flexWrap: 'wrap', marginTop: '50px', marginBottom: '50px'}}>
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
            <Card sx={{ maxWidth: 400, border: '1px solid lightgray', minWidth: 400 }}>
                <CardHeader
                    action={
                        <Tooltip title="Réserver cette activité" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenResaDeriveur}>
                                <KayakingIcon />
                            </IconButton>
                        </Tooltip>

                    }
                    title="Location de Dériveur"
                    subheader="Carantec"
                />
                <div onMouseEnter={() => setOpenOverlay4(true)} onMouseLeave={() => setOpenOverlay4(false)}>
                      <CardMedia
                          component="img"
                          height="194"
                          image={DeriveurImg}
                          alt="Dériveur"
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
                                      }}
                                      onClick={() => navigate('/private/réservation dériveur')}
                                  >
                                      Réserver cette activité
                                  </Button>
                                  :
                                  <Typography variant="body2" color="text.secondary">
                                      Robuste et performant, les dériveurs RS Néo conviennent à un large panel de navigateurs grâce à leurs grandes stabilités
                                  </Typography>
                          }
                      </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, border: '1px solid lightgray', minWidth: 400 }}>
                <CardHeader
                    action={
                        <Tooltip title="Réserver cette activité" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenResaPlanche}>
                                <KayakingIcon />
                            </IconButton>
                        </Tooltip>

                    }
                    title="Location de Planche à Voile"
                    subheader="Carantec"
                />
                <div onMouseEnter={() => setOpenOverlay5(true)} onMouseLeave={() => setOpenOverlay5(false)}>
                      <CardMedia
                          component="img"
                          height="194"
                          image={PlancheImg}
                          alt="Planche à Voile"
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
                                      }}
                                      onClick={() => navigate('/private/réservation planche à voile')}
                                  >
                                      Réserver cette activité
                                  </Button>
                                  :
                                  <Typography variant="body2" color="text.secondary">
                                      Le Nord de la Bretagne représente le meilleur spot pour les experts. Il existe un panel de spots en Nord Finistère.
                                  </Typography>
                          }
                      </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, border: '1px solid lightgray', minWidth: 400 }}>
                <CardHeader
                    action={
                        <Tooltip title="Réserver cette activité" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenResaTrimaran}>
                                <KayakingIcon />
                            </IconButton>
                        </Tooltip>

                    }
                    title="Location de Trimaran"
                    subheader="Carantec"
                />
                <div onMouseEnter={() => setOpenOverlay6(true)} onMouseLeave={() => setOpenOverlay6(false)}>
                      <CardMedia
                          component="img"
                          height="194"
                          image={TrimaranImg}
                          alt="Trimaran"
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
                                      }}
                                      onClick={() => navigate('/private/réservation trimaran')}
                                  >
                                      Réserver cette activité
                                  </Button>
                                  :
                                  <Typography variant="body2" color="text.secondary">
                                      Location de Trimaran Magnum21. Idéal pour la navigation de balade à la journée.
                                  </Typography>
                          }
                      </CardContent>
                </div>
            </Card>
        </Container>
    </>
  )
}
