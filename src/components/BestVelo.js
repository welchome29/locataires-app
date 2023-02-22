import React, { useState } from 'react'
import { Card, CardContent, CardMedia, IconButton, Typography, Button } from '@mui/material'
import Container from '@mui/material/Container'
import CardHeader from '@mui/material/CardHeader'
import BikeImg from '../assets/bike.jpg'
import VeloImg2 from '../assets/velo2.jpg'
import VeloImg3 from '../assets/velo3.jpg'
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike'
import Tooltip from '@mui/material/Tooltip'
import { useNavigate } from 'react-router-dom'

export default function BestVelo() {
    const navigate = useNavigate()
    const [openOverlay, setOpenOverlay] = useState(false)
    const [openOverlay2, setOpenOverlay2] = useState(false)
    const [openOverlay3, setOpenOverlay3] = useState(false)

    const handleOpenResaVeloMlx = () => navigate('/private/réservation vélo morlaix')
    const handleOpenResaVeloCar = () => navigate('/private/réservation vélo carantec')
    const handleOpenResaVeloBatz = () => navigate('/private/réservation vélo île de batz')

  return (
    <Container maxWidth="100%" sx={{ display: 'flex', justifyContent: 'center',  gap: '100px', flexWrap: 'wrap', marginTop: '25px', marginBottom: '50px'}}>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    action={
                        <Tooltip title="Réserver cette activité" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenResaVeloMlx}>
                                <DirectionsBikeIcon />
                            </IconButton>
                        </Tooltip>
                    }
                    title="Location de Vélo"
                    subheader="Morlaix"
                />
                <div onMouseEnter={() => setOpenOverlay(true)} onMouseLeave={() => setOpenOverlay(false)}>
                  <CardMedia
                      component="img"
                      height="194"
                      image={BikeImg}
                      alt="Vélo"
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
                                  onClick={() => navigate('/private/réservation vélo morlaix')}
                              >
                                  Réserver cette activité
                              </Button>
                              :
                              <Typography variant="body2" color="text.secondary">
                                  L'office du tourisme de Morlaix propose un service de location de vélo. Possibilité d'itinérance "one way", louez à Morlaix et laissez le à Lannion.
                              </Typography>
                      }
                  </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    action={
                        <Tooltip title="Réserver cette activité" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenResaVeloCar}>
                                <DirectionsBikeIcon />
                            </IconButton>
                        </Tooltip>

                    }
                    title="Location de Vélo"
                    subheader="Carantec"
                />
                <div onMouseEnter={() => setOpenOverlay2(true)} onMouseLeave={() => setOpenOverlay2(false)}>
                  <CardMedia
                      component="img"
                      height="194"
                      image={VeloImg2}
                      alt="Vélo"
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
                                  onClick={() => navigate('/private/réservation vélo carantec')}
                              >
                                  En savoir plus
                              </Button>
                              :
                              <Typography variant="body2" color="text.secondary">
                                  L'office du tourisme de Carantec propose plusieurs modèles de vélo à la location pour les adeptes en deux roues
                              </Typography>
                      }
                  </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    action={
                        <Tooltip title="Réserver cette activité" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenResaVeloBatz}>
                                <DirectionsBikeIcon />
                            </IconButton>
                        </Tooltip>

                    }
                    title="Location de Vélo"
                    subheader="Île de Batz"
                />
                <div onMouseEnter={() => setOpenOverlay3(true)} onMouseLeave={() => setOpenOverlay3(false)}>
                  <CardMedia
                      component="img"
                      height="194"
                      image={VeloImg3}
                      alt="vélo"
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
                                  onClick={() => navigate('/private/réservation vélo île de batz')}
                              >
                                  Réserver cette activité
                              </Button>
                              :
                              <Typography variant="body2" color="text.secondary">
                                  Le vélo est l'accessoire indispensable à l'île de batz. Il vous faudra absolument un vélo si vous voulez visiter ou tout simplement vous déplacez dans l'île.
                              </Typography>
                      }
                  </CardContent>
                </div>
            </Card>
        </Container>
  )
}
