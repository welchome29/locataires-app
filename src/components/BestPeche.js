import React, { useState } from 'react'
import { Card, CardContent, CardMedia, IconButton, Typography, Button } from '@mui/material'
import Container from '@mui/material/Container'
import CardHeader from '@mui/material/CardHeader'
import PecheImg from '../assets/peche.jpg'
import PecheImg2 from '../assets/peche2.jpg'
import PecheImg3 from '../assets/peche3.jpg'
import PhishingIcon from '@mui/icons-material/Phishing'
import Tooltip from '@mui/material/Tooltip'
import { useNavigate } from 'react-router-dom'

export default function BestPeche() {
    const navigate = useNavigate()
    const [openOverlay, setOpenOverlay] = useState(false)
    const [openOverlay2, setOpenOverlay2] = useState(false)
    const [openOverlay3, setOpenOverlay3] = useState(false)

    const handleOpenResaPecheDemi = () => navigate('/private/pêche demi-journée')
    const handleOpenResaPecheJournee = () => navigate('/private/pêche journée')
    const handleOpenResaPecheSoiree = () => navigate('/private/pêche soirée')

  return (
    <Container maxWidth="100%" sx={{ display: 'flex', justifyContent: 'center',  gap: '100px', flexWrap: 'wrap', marginTop: '25px'}}>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    action={
                        <Tooltip title="Réserver cette activité" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenResaPecheDemi}>
                                <PhishingIcon />
                            </IconButton>
                        </Tooltip>

                    }
                    title="Pêche en Mer 1/2 journée"
                    subheader="Roscoff"
                />
                <div onMouseEnter={() => setOpenOverlay(true)} onMouseLeave={() => setOpenOverlay(false)}>
                  <CardMedia
                      component="img"
                      height="194"
                      image={PecheImg}
                      alt="Pêche"
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
                                  onClick={() => navigate('/private/pêche demi-journée')}
                              >
                                  Réserver cette activité
                              </Button>
                              :
                              <Typography variant="body2" color="text.secondary">
                                  Encadré par un moniteur guide de pêche, vous embarquerez pour une demi-journée de pêche en Baie de Morlaix. Tout le matériel est fourni.
                              </Typography>
                      }
                  </CardContent>
                </div>
                
            </Card>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    action={
                        <Tooltip title="Réserver cette activité" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenResaPecheJournee}>
                                <PhishingIcon />
                            </IconButton>
                        </Tooltip>

                    }
                    title="Pêche en Mer 1 journée"
                    subheader="Roscoff"
                />
                <div onMouseEnter={() => setOpenOverlay2(true)} onMouseLeave={() => setOpenOverlay2(false)}>
                  <CardMedia
                      component="img"
                      height="194"
                      image={PecheImg2}
                      alt="Pêche"
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
                                  onClick={() => navigate('/private/pêche journée')}
                              >
                                  En savoir plus
                              </Button>
                              :
                              <Typography variant="body2" color="text.secondary">
                                  Selon les conditions du moment et le niveau des pêcheurs, vous pratiquerez la pêche verticale aux appâts ou sportive aux leurres.
                              </Typography>
                      }
                  </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    action={
                        <Tooltip title="Réserver cette activité" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenResaPecheSoiree}>
                                <PhishingIcon />
                            </IconButton>
                        </Tooltip>

                    }
                    title="Soirée Pêche en Mer"
                    subheader="Roscoff"
                />
                <div onMouseEnter={() => setOpenOverlay3(true)} onMouseLeave={() => setOpenOverlay3(false)}>
                  <CardMedia
                      component="img"
                      height="194"
                      image={PecheImg3}
                      alt="Pêche"
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
                                  onClick={() => navigate('/private/pêche soirée')}
                              >
                                  Réserver cette activité
                              </Button>
                              :
                              <Typography variant="body2" color="text.secondary">
                                  Cet été lorsque les jours sont plus longs, l'idée est de profiter d'être sur l'eau en début de soirée, moment pendant lequel les poissons connaissent un regain d'activité.
                              </Typography>
                      }
                  </CardContent>
                </div>
            </Card>
        </Container>
  )
}
