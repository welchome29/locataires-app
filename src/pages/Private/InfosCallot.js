import React from 'react'
import '../../styles/PrivateHome.css'
import backGround from '../../assets/bg-callot.jpg'
import mareeBasse from '../../assets/callot_maree_basse.jpg'
import mareeHaute from '../../assets/callot_maree_haute.jpg'
import mapCallot from '../../assets/map_callot.jpg'
import { Box, Container } from '@mui/system'
import { Typography } from '@mui/material'
import LoisirsNavBar from '../../components/LoisirsNavBar'

export default function InfosCallot() {
  return (
    <>
      <LoisirsNavBar />
      <div className='container' style={{ margin: 0, padding: 0, maxWidth: "1920px" }}>
        <img src={backGround} alt='' className='img-fluid' />
      </div>
      <Container maxWidth='80%' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography 
          variant='h3' 
          sx={{ 
            textAlign: 'center', 
            marginTop: '50px',  
          }}
        >
          VISITE DE L'ÎLE CALLOT À CARANTEC
        </Typography>
        <Typography variant='h4' sx={{ marginTop: '50px' }}>
          [ À MARÉE BASSE ]
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px', flexWrap: 'wrap', gap: '25px' }}>
          <img src={mareeBasse} alt='île callot à marée basse' className='img-fluid' style={{ borderRadius: '20px' }}/>
          <Typography variant='body1' sx={{ alignSelf: 'center' }}>
            On estime qu'il est possible de commencer à traverser deux heures avant la marée basse.<br />
            C'est le moment parfait pour pratiquer la pêche à pied, entre rochers et zones de sable.<br />
            Ici ce sont les palourdes que l'on cueille. <br /> <br />
            Attention à ne pas rester trop concentré sur sa pêche, 2 heures après la marée basse, il faut <br />
            être revenu côté continent. Compter 20 minutes à pied à parcourir entre l'île et Carantec.<br />
            Cliquer <a href='https://www.baiedemorlaix.bzh/wp-content/uploads/2022/12/horaires-passage-ile-callot-carantec-2023.pdf' target='_blank' rel='noreferrer noopener' style={{ textDecoration: 'none', fontWeight: '900' }}>ICI </a>
            pour obtenir les horaires de passage selon les marées.<br /><br />
            Une fois sur l'île, vous pourrez explorer ses plages, ses falaises et sa faune et flore uniques.<br />
            Il est conseillé d'emporter de l'eau, de la nourriture et des vêtements adaptés aux<br /> 
            conditions météorologiques.
          </Typography>
        </Box>
        <Typography variant='h4' sx={{ marginTop: '100px' }}>
          [ À MARÉE HAUTE ]
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px', flexWrap: 'wrap', gap: '25px' }}>
        <Typography variant='body1' sx={{ alignSelf: 'center' }}>
            Si vous avez le temps, ou un bateau, l'île de deux kilomètres de long est alors cerclée par <br />
            les flots, et l'on profite, isolé, de ses plages somptueuses dans une ambiance paisible et <br />
            hors du temps.<br /><br />
            Pour celles et ceux qui veulent dormir sur place, l'ancienne école de l'île a été transformée <br />
            en gîte. Plus d'informations en cliquant <a href='https://www.baiedemorlaix.bzh/wp-content/uploads/2022/12/horaires-passage-ile-callot-carantec-2023.pdf' target='_blank' rel='noreferrer noopener' style={{ textDecoration: 'none', fontWeight: '900' }}>ICI.</a>
          </Typography>
          <img src={mareeHaute} alt='île callot à marée haute' className='img-fluid' style={{ borderRadius: '20px' }}/>
        </Box>
        <Typography variant='h4' sx={{ marginTop: '100px' }}>
          [ PLAN D'ACCÈS ]
        </Typography>
        <a href='https://www.google.fr/maps/place/%C3%8Ele+Callot/@48.6871473,-3.9331448,15z/data=!3m1!4b1!4m6!3m5!1s0x4813e05c2ce2a801:0x94aec63d76f07dd3!8m2!3d48.687134!4d-3.92439!16s%2Fg%2F122jr4d_' target='_blank' rel='noreferrer noopener'>
          <img src={mapCallot} alt='île callot à marée haute' className='img-fluid' style={{ borderRadius: '20px', marginTop: '50px', marginBottom: '50px' }}/>
          </a>
      </Container>
    </>
  )
}
