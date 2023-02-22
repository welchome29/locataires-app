import React, { useState } from 'react'
import { Card, CardContent, CardMedia, IconButton, Typography, Button } from '@mui/material'
import Container from '@mui/material/Container'
import CardHeader from '@mui/material/CardHeader'
import KayakingIcon from '@mui/icons-material/Kayaking'
import KayakImg from '../assets/kayak.jpg'
import ChateauImg from '../assets/chateau-taureau.jpg'
import BatzImg from '../assets/ile-batz.jpeg'
import HikingIcon from '@mui/icons-material/Hiking'
import { useNavigate } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip'

export default function BestActivity() {
    const navigate = useNavigate()
    const [openOverlay, setOpenOverlay] = useState(false)
    const [openOverlay2, setOpenOverlay2] = useState(false)
    const [openOverlay3, setOpenOverlay3] = useState(false)

    const handleOpenSportsNautiquesCat = () => navigate('/private/sports nautiques') 
    const handleOpenVisitesCat = () => navigate('/private/visites') 

  return (
    <Container maxWidth="100%" sx={{ display: 'flex', justifyContent: 'center',  gap: '100px', flexWrap: 'wrap'}}>
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    action={
                        <Tooltip title="Voir la catégorie Sports Nautiques">
                          <IconButton onClick={handleOpenSportsNautiquesCat}>
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
            <Card sx={{ maxWidth: 400, minWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    action={
                        <Tooltip title="Voir la catégorie Visites">
                          <IconButton onClick={handleOpenVisitesCat}>
                              <HikingIcon />
                          </IconButton>
                        </Tooltip>

                    }
                    title="Visite du château du taureau"
                    subheader="Carantec"
                />
                <div onMouseEnter={() => setOpenOverlay2(true)} onMouseLeave={() => setOpenOverlay2(false)}>
                <CardMedia
                    component="img"
                    height="194"
                    image={ChateauImg}
                    alt="Château du taureau"
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
                        <Tooltip title="Voir la catégorie Visites">
                          <IconButton onClick={handleOpenVisitesCat}>
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
                      alt="île de Batz"
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
