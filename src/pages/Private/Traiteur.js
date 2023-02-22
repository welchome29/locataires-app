import React, { useState } from 'react'
import '../../styles/PrivateHome.css'
import backGround from '../../assets/bg-traiteur.jpg'
import traiteurCrudites from '../../assets/traiteur_crudites.jpg'
import traiteurLieu from '../../assets/traiteur_lieu.jpg'
import traiteurSaumon from '../../assets/traiteur_saumon.jpg'
import { Box, Container } from '@mui/system'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import { red, blue, yellow } from '@mui/material/colors'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function Traiteur() {
  const [expanded, setExpanded] = useState(false)
  const [expanded2, setExpanded2] = useState(false)
  const [expanded3, setExpanded3] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  }

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  }

  return (
    <>
      <div className='container' style={{ margin: 0, padding: 0, maxWidth: "1920px" }}>
        <img src={backGround} alt='' className='img-fluid' />
      </div>
      <Container maxWidth="80%" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='h2' sx={{ textAlign: 'center', marginTop: '50px' }}>
          SERVICE TRAITEUR
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', flexWrap: 'wrap', gap: '50px' }}>
          <Card sx={{ maxWidth: 400, border: '1px solid lightgray' }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                  1
                </Avatar>
              }
              title='FORMULE CLASSIQUE'
              onClick={handleExpandClick}
              sx={{ cursor: 'pointer' }}
            />
            <CardMedia
              component='img'
              height='194'
              image={traiteurCrudites}
              alt='Rôti de Boeuf froid'
              onClick={handleExpandClick}
              sx={{ cursor: 'pointer' }}
            />
            <CardContent
              onClick={handleExpandClick}
              sx={{ cursor: 'pointer' }}
            >
              <Typography variant='body2' color='text.secondary'>
                Une formule simple cuisinée avec des produits frais de qualité. Nos producteurs sont rigoureusement
                sélectionnés. Nous privilégions les circuits courts grâce à la richesse de nos produits locaux.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label='voir plus'
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography paragraph variant='h6'>Entrée:</Typography>
                <Typography paragraph>
                  Assortiment de crudités
                </Typography>
                <Typography paragraph variant='h6'>Plats:</Typography>
                <Typography paragraph>
                  Rôti de Boeuf froid et salade verte ou filet de poulet mariné
                </Typography>
                <Typography paragraph variant='h6'>Dessert:</Typography>
                <Typography paragraph>
                  Dessert du jour
                </Typography>
                <Button variant='outlined'>Choisir cette formule</Button>
              </CardContent>
            </Collapse>
          </Card>
          <Card sx={{ maxWidth: 400, border: '1px solid lightgray' }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: blue[500] }} aria-label='recipe'>
                  2
                </Avatar>
              }
              title='FORMULE GOURMANDE'
              onClick={handleExpandClick2}
              sx={{ cursor: 'pointer' }}
            />
            <CardMedia
              component='img'
              height='194'
              image={traiteurLieu}
              alt='Filet de lieu jaune'
              onClick={handleExpandClick2}
              sx={{ cursor: 'pointer' }}
            />
            <CardContent
              onClick={handleExpandClick2}
              sx={{ cursor: 'pointer' }}
            >
              <Typography variant='body2' color='text.secondary'>
                Une formule plus élaborée avec des produits frais de qualité. Vous avez le choix des 
                garnitures pour le plat principal ainsi que du fromage affiné. Le dessert du jour
                régalera vos papilles pour finir.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded2}
                onClick={handleExpandClick2}
                aria-expanded={expanded2}
                aria-label='voir plus'
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded2} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography paragraph variant='h6'>Entrée:</Typography>
                <Typography paragraph>
                  Salade composée
                </Typography>
                <Typography paragraph variant='h6'>Plats:</Typography>
                <Typography paragraph>
                  Filet de lieu jaune ou Paleron de Boeuf accompagné de légumes, riz ou pâtes
                </Typography>
                <Typography paragraph variant='h6'>Fromage:</Typography>
                <Typography paragraph>
                  Sélection de 2 à trois fromages affinés
                </Typography>
                <Typography paragraph variant='h6'>Dessert:</Typography>
                <Typography paragraph>
                  Dessert du jour
                </Typography>
                <Button variant='outlined'>Choisir cette formule</Button>
              </CardContent>
            </Collapse>
          </Card>
          <Card sx={{ maxWidth: 400, border: '1px solid lightgray' }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: yellow[700] }} aria-label='recipe'>
                  3
                </Avatar>
              }
              title='FORMULE PREMIUM'
              onClick={handleExpandClick3}
              sx={{ cursor: 'pointer' }}
            />
            <CardMedia
              component='img'
              height='194'
              image={traiteurSaumon}
              alt='Saumon fumé et salade de perles de mer'
              onClick={handleExpandClick3}
              sx={{ cursor: 'pointer' }}
            />
            <CardContent
              onClick={handleExpandClick3}
              sx={{ cursor: 'pointer' }}
            >
              <Typography variant='body2' color='text.secondary'>
                Une formule premium cuisinée avec des produits d'exception. Avec cette formule, vous ne manquerez de rien car le pain, les couverts, les verres 
                et le beurre sont fournis.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded3}
                onClick={handleExpandClick3}
                aria-expanded={expanded3}
                aria-label='voir plus'
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded3} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography paragraph variant='h6'>Entrée:</Typography>
                <Typography paragraph>
                  Saumon fumé et sa salade de perles des mers
                </Typography>
                <Typography paragraph variant='h6'>Plat:</Typography>
                <Typography paragraph>
                  Boeuf braisé, tomatade et ses légumes du moment
                </Typography>
                <Typography paragraph variant='h6'>Fromage:</Typography>
                <Typography paragraph>
                  Comté 18 mois et tomme de Savoie
                </Typography>
                <Typography paragraph variant='h6'>Dessert:</Typography>
                <Typography paragraph>
                  Blanc-manger à la mangue
                </Typography>
                <Button variant='outlined'>Choisir cette formule</Button>
              </CardContent>
            </Collapse>
          </Card>
        </Box>
        <Typography variant='h6' sx={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}>
          Pour mieux vous servir, veuillez passer vos commandes 48h à l'avance. La livraison est gratuite 
          à partir de 40€ d'achat.
        </Typography>
      </Container>
    </>
  )
}
