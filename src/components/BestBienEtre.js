import React, { useState } from 'react'
import { Card, CardContent, CardMedia, IconButton, Typography, Button } from '@mui/material'
import Container from '@mui/material/Container'
import CardHeader from '@mui/material/CardHeader'
import MassageZenImg from '../assets/massagezen.jpg'
import PauseImg2 from '../assets/pause.jpg'
import HydroImg3 from '../assets/hydro.jpg'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'
import Tooltip from '@mui/material/Tooltip'
import { useNavigate } from 'react-router-dom'

export default function BestBienEtre() {
    const navigate = useNavigate()
    const [openOverlay, setOpenOverlay] = useState(false)
    const [openOverlay2, setOpenOverlay2] = useState(false)
    const [openOverlay3, setOpenOverlay3] = useState(false)

    const handleOpenResaMassage = () => navigate('/private/massage zen')
    const handleOpenResaDouceur = () => navigate('/private/pause douceur')
    const handleOpenResaHydro = () => navigate('/private/pause hydrosensorielle')

  return (
    <Container maxWidth="100%" sx={{ display: 'flex', justifyContent: 'center',  gap: '100px', flexWrap: 'wrap', marginTop: '25px'}}>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    action={
                        <Tooltip title="Réserver cette activité" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenResaMassage}>
                                <SelfImprovementIcon />
                            </IconButton>
                        </Tooltip>
                    }
                    title="Massage Zen"
                    subheader="Roscoff"
                />
                <div onMouseEnter={() => setOpenOverlay(true)} onMouseLeave={() => setOpenOverlay(false)}>
                  <CardMedia
                      component="img"
                      height="194"
                      image={MassageZenImg}
                      alt="Massage Zen"
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
                                  onClick={() => navigate('/private/massage zen')}
                              >
                                  Réserver cette activité
                              </Button>
                              :
                              <Typography variant="body2" color="text.secondary">
                                  Pour les femmes et les hommes qui souhaitent évacuer leur stress et leur fatigue et s'offrir un moment de détente et de sérénité
                              </Typography>
                      }
                  </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    action={
                        <Tooltip title="Réserver cette activité" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenResaDouceur}>
                                <SelfImprovementIcon />
                            </IconButton>
                        </Tooltip>

                    }
                    title="Pause de Douceur"
                    subheader="Roscoff"
                />
                <div onMouseEnter={() => setOpenOverlay2(true)} onMouseLeave={() => setOpenOverlay2(false)}>
                  <CardMedia
                      component="img"
                      height="194"
                      image={PauseImg2}
                      alt="Pause de douceur"
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
                                  onClick={() => navigate('/private/pause douceur')}
                              >
                                  En savoir plus
                              </Button>
                              :
                              <Typography variant="body2" color="text.secondary">
                                  Avec 3 soins d'exception et un accès au Spa Marin inclus, votre journée sera réussie
                              </Typography>
                      }
                  </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    action={
                        <Tooltip title="Réserver cette activité" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenResaHydro}>
                                <SelfImprovementIcon />
                            </IconButton>
                        </Tooltip>

                    }
                    title="Pause Hydrosensorielle"
                    subheader="Roscoff"
                />
                <div onMouseEnter={() => setOpenOverlay3(true)} onMouseLeave={() => setOpenOverlay3(false)}>
                  <CardMedia
                      component="img"
                      height="194"
                      image={HydroImg3}
                      alt="Pause hydrosensorielle"
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
                                  onClick={() => navigate('/private/pause hydrosensorielle')}
                              >
                                  Réserver cette activité
                              </Button>
                              :
                              <Typography variant="body2" color="text.secondary">
                                  Pour les femmes et les hommes qui recherchent un massage unique combinant eau et lumière pour une détente absolue
                              </Typography>
                      }
                  </CardContent>
                </div>
            </Card>
        </Container>
  )
}
