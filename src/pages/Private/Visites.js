import React, { useState } from 'react'
import LoisirsNavBar from '../../components/LoisirsNavBar'
import { Card, CardContent, CardMedia, IconButton, Typography, Button } from '@mui/material'
import CardHeader from '@mui/material/CardHeader'
import Container from '@mui/material/Container'
import Tooltip from '@mui/material/Tooltip'
import HikingIcon from '@mui/icons-material/Hiking'
import ChateauImg from '../../assets/chateau-taureau.jpg'
import CallotImg from '../../assets/callot.jpg'
import BatzImg from '../../assets/ile-batz.jpeg'
import Gr34Img from '../../assets/gr34.jpeg'
import MontsImg from '../../assets/monts.jpg'
import { useNavigate } from 'react-router-dom'

export default function Visites() {
    const navigate = useNavigate()
    const [openOverlay, setOpenOverlay] = useState(false)
    const [openOverlay2, setOpenOverlay2] = useState(false)
    const [openOverlay3, setOpenOverlay3] = useState(false)
    const [openOverlay4, setOpenOverlay4] = useState(false)
    const [openOverlay5, setOpenOverlay5] = useState(false)
    const handleOpenResaChateau = () => navigate('/private/réservation château du taureau')
    const handleOpenInfoCallot = () => navigate('/private/infos île callot')
    const handleOpenResaBatz = () => navigate('/private/réservation île de batz')
    const handleOpenInfosGR34 = () => navigate('/private/infos gr34')
    const handleOpenInfosArree = () => navigate('/private/infos monts d\'arrée')

  return (
    <>
      <LoisirsNavBar />
      <Typography variant='h4' style={{ marginTop: '50px', textAlign: 'center' }}>
            LES VISITES ET EXCURSIONS
      </Typography>
      <Container maxWidth="100%" sx={{ display: 'flex', justifyContent: 'center',  gap: '100px', flexWrap: 'wrap', marginTop: '50px', marginBottom: '50px'}}>
      <Card sx={{ maxWidth: 400, border: '1px solid lightgray', minWidth: 400 }}>
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
                                      onClick={handleOpenResaChateau}
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
            <Card sx={{ maxWidth: 400, border: '1px solid lightgray', minWidth: 400 }}>
                <CardHeader
                    action={
                        <Tooltip title="En savoir Plus" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenInfoCallot}>
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
                                      onClick={handleOpenInfoCallot}
                                  >
                                      En savoir plus
                                  </Button>
                                  :
                                  <Typography variant="body2" color="text.secondary">
                                      Accessible à pied ou à vélo à marée basse, l'île Callot abrite une dizaine de plages de sable blanc et offre un panorama sur la Baie de Morlaix
                                  </Typography>
                          }
                      </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, border: '1px solid lightgray', minWidth: 400 }}>
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
                                      onClick={handleOpenResaBatz}
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
            <Card sx={{ maxWidth: 400, border: '1px solid lightgray', minWidth: 400 }}>
                <CardHeader
                    action={
                        <Tooltip title="En savoir plus" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenInfosGR34}>
                                <HikingIcon />
                            </IconButton>
                        </Tooltip>

                    }
                    title="Chemin GR34"
                    subheader="Bretagne"
                />
                <div onMouseEnter={() => setOpenOverlay4(true)} onMouseLeave={() => setOpenOverlay4(false)}>
                      <CardMedia
                          component="img"
                          height="194"
                          image={Gr34Img}
                          alt="GR34"
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
                                      onClick={handleOpenInfosGR34}
                                  >
                                      En savoir plus
                                  </Button>
                                  :
                                  <Typography variant="body2" color="text.secondary">
                                      Élu GR préféré des français, le GR34 permet de découvrir le littoral, au plus près des plages et des pointes. Randonnées et balade Locquirec à Carantec
                                  </Typography>
                          }
                      </CardContent>
                </div>
            </Card>
            <Card sx={{ maxWidth: 400, border: '1px solid lightgray', minWidth: 400 }}>
                <CardHeader
                    action={
                        <Tooltip title="En savoir plus" sx={{ cursor: 'pointer'}}>
                            <IconButton onClick={handleOpenInfosArree}>
                                <HikingIcon />
                            </IconButton>
                        </Tooltip>

                    }
                    title="Balade sur les crêtes"
                    subheader="Monts d'Arrée"
                />
                <div onMouseEnter={() => setOpenOverlay5(true)} onMouseLeave={() => setOpenOverlay5(false)}>
                      <CardMedia
                          component="img"
                          height="194"
                          image={MontsImg}
                          alt="monts d'arrée"
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
                                      onClick={handleOpenInfosArree}
                                  >
                                      En savoir plus
                                  </Button>
                                  :
                                  <Typography variant="body2" color="text.secondary">
                                      Prenez de la hauteur. Landes et crêtes dévoilent leurs couleurs chaleureuses dans les Monts d'Arrée
                                  </Typography>
                          }
                      </CardContent>
                </div>
            </Card>
        </Container>
    </>
  )
}
