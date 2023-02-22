import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import { teal } from '@mui/material/colors'
import Container from '@mui/material/Container'
import TableBarIcon from '@mui/icons-material/TableBar'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import BellevueImg from '../assets/le-bellevue.jpg'
import TyPotImg from '../assets/typot.jpg'
import LipouzImg from '../assets/lipouz.jpeg'
import Tooltip from '@mui/material/Tooltip'

export default function BestResto() {

    return (
        <Container maxWidth="100%" sx={{ display: 'flex', justifyContent: 'center',  gap: '100px', flexWrap: 'wrap'}}>
            <Card sx={{ maxWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    avatar={
                       
                            <Avatar sx={{ bgcolor: teal[500] }} aria-label="recipe">
                                <TableBarIcon />
                            </Avatar>
                    }
                    action={
                        <Tooltip title="Voir la page TripAdvisor">
                            <a href='https://www.tripadvisor.fr/Restaurant_Review-g196532-d1192358-Reviews-Le_Bellevue-Roscoff_Finistere_Brittany.html' target='_blank' rel='noreferrer noopener'>
                                <IconButton>
                                    <ArrowCircleRightIcon />
                                </IconButton>
                            </a>
                        </Tooltip>

                    }
                    title="Le Bellevue"
                    subheader="Roscoff"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={BellevueImg}
                    alt="Restaurant Le Bellevue"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Le Bellevue vous offre une vue panoramique sur le port de Roscoff. Vous pourrez y déguster des plats succulents conçus avec des produits frais.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: teal[500] }} aria-label="recipe">
                            <TableBarIcon />
                        </Avatar>
                    }
                    action={
                        <Tooltip title="Voir la page TripAdvisor">
                            <a href='https://www.tripadvisor.fr/Restaurant_Review-g675056-d2269565-Reviews-La_table_de_Ty_Pot-Carantec_Finistere_Brittany.html' target='_blank' rel='noreferrer noopener'>
                                <IconButton>
                                    <ArrowCircleRightIcon />
                                </IconButton>
                            </a>
                        </Tooltip>

                    }
                    title="La Table de Ty Pot"
                    subheader="Carantec"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={TyPotImg}
                    alt="La Table de Ty Pot"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Un Restaurant chaleureux avec des plats de qualité, sa façade rouge et la déco vous invite à rentrer.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 400, border: '1px solid lightgray' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: teal[500] }} aria-label="recipe">
                            <TableBarIcon />
                        </Avatar>
                    }
                    action={
                        <Tooltip title="Voir la page TripAdvisor">
                            <a href='https://www.tripadvisor.fr/Restaurant_Review-g608763-d13444951-Reviews-Lipouz-Morlaix_Finistere_Brittany.html' target='_blank' rel='noreferrer noopener'>
                                <IconButton>
                                    <ArrowCircleRightIcon />
                                </IconButton>
                            </a>
                        </Tooltip>

                    }
                    title="Lipouz"
                    subheader="Morlaix"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={LipouzImg}
                    alt="Lipouz"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Restaurant bistronomique au coeur de Morlaix. Les plats sont fins et excellent. Le service est très agréable.
                    </Typography>
                </CardContent>
            </Card>
        </Container>
  )
}
