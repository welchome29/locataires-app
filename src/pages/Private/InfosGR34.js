import React from 'react'
import LoisirsNavBar from '../../components/LoisirsNavBar'
import backGround from '../../assets/bg-gr34.jpg'
import gr34Santec from '../../assets/gr34_santec.jpg'
import gr34Roscoff from '../../assets/gr34_roscoff.jpg'
import gr34Carantec from '../../assets/gr34_carantec.jpg'
import gr34Morlaix from '../../assets/gr34_morlaix.jpg'
import { Box, Container } from '@mui/system'
import { Typography } from '@mui/material'
import '../../styles/PrivateHome.css'


export default function InfosGR34() {
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
                GR34 : LA BAIE DE MORLAIX À PIED
            </Typography>
            <Typography variant='h4' sx={{ marginTop: '50px' }}>
                [ AU DÉPART DE SANTEC ]
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px', flexWrap: 'wrap', gap: '25px' }}>
                <img src={gr34Santec} alt='gr34 au départ de Santec' className='img-fluid' style={{ borderRadius: '20px' }}/>
                <Typography variant='body1' sx={{ alignSelf: 'center' }}>
                    À l'Ouest de Roscoff, le gr34 passera par la Côte des Sables.<br />
                    22km de plages de sable fin le long d'un sentier ouvert avec un dénivelé faible.<br /><br />
                    Modelées par les courants et les vents, les dunes sableuses forment<br />
                    des balades incontournables dans la région.<br /><br />
                    <a href='https://www.roscoff-tourisme.com/fr/a-voir-a-faire/randonnees/randonnees-a-pied/le-gr-34-le-sentier-des-douaniers/' 
                        target='_blank' 
                        rel='noreferrer noopener' 
                        style={{ textDecoration: 'none', fontWeight: 900 }}
                    >
                        ACCÉDER AU PLAN
                    </a>
                </Typography>
            </Box>
            <hr style={{ background: 'grey', height: '3px', border: 'none', width: '80%', marginTop: '50px' }} />
            <Typography variant='h4' sx={{ marginTop: '50px' }}>
                [ AU DÉPART DE ROSCOFF ]
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center', marginTop: '50px', flexWrap: 'wrap', gap: '25px' }}>
                <img src={gr34Roscoff} alt='gr34 au départ de Roscoff' className='img-fluid' style={{ borderRadius: '20px' }}/>
                <Typography variant='body1' sx={{ alignSelf: 'center' }}>
                    Ici, le GR34 va longer l'intérieur de la Baie de Morlaix en passant par<br />
                    Saint-Pol de Léon et Plouénan pour enfin arriver à Carantec.<br /><br />
                    De la chapelle Sainte-Barbe à Roscoff à l'îlot Saint-Anne à Saint-pol de Léon,<br />
                    vous découvrirez de magnifiques paysages tels que de petites criques,<br />
                    des formations rocheuses pour de jolis points de vue en hauteur, pour arriver<br />
                    à la pointe de Pen-an-Lann à Carantec, face au château du taureau.<br /><br />
                    <a href='https://www.roscoff-tourisme.com/fr/a-voir-a-faire/randonnees/randonnees-a-pied/le-gr-34-le-sentier-des-douaniers/' 
                        target='_blank' 
                        rel='noreferrer noopener' 
                        style={{ textDecoration: 'none', fontWeight: 900 }}
                    >
                        ACCÉDER AU PLAN
                    </a>
                </Typography>
            </Box>
            <hr style={{ background: 'grey', height: '3px', border: 'none', width: '80%', marginTop: '50px' }} />
            <Typography variant='h4' sx={{ marginTop: '50px' }}>
                [ AU DÉPART DE CARANTEC ]
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px', flexWrap: 'wrap', gap: '25px' }}>
                <img src={gr34Carantec} alt='gr34 au départ de Carantec' className='img-fluid' style={{ borderRadius: '20px' }}/>
                <Typography variant='body1' sx={{ alignSelf: 'center' }}>
                    Sur le chemin, avec des vues à couper le souffle, vous pourrez vous laisser tenter<br />
                    par une dégustation d'huîtres dans les chantiers ostréicoles de Prat Ar Coum.<br /><br />
                    Direction ensuite Locquénolé grâce à un parcours mêlant sentier maritime et chemin<br />
                    à travers bois qui vous offrira un point de vue remarquable sur la rivière de Morlaix.<br /><br />
                    <a href='https://www.roscoff-tourisme.com/fr/a-voir-a-faire/randonnees/randonnees-a-pied/le-gr-34-le-sentier-des-douaniers/' 
                        target='_blank' 
                        rel='noreferrer noopener' 
                        style={{ textDecoration: 'none', fontWeight: 900 }}
                    >
                        ACCÉDER AU PLAN
                    </a>
                </Typography>
            </Box>
            <hr style={{ background: 'grey', height: '3px', border: 'none', width: '80%', marginTop: '50px' }} />
            <Typography variant='h4' sx={{ marginTop: '50px' }}>
                [ ARRIVÉE À MORLAIX ]
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center', marginTop: '50px', marginBottom: '50px', flexWrap: 'wrap', gap: '25px' }}>
                <img src={gr34Morlaix} alt='gr34 au départ de Morlaix' className='img-fluid' style={{ borderRadius: '20px' }}/>
                <Typography variant='body1' sx={{ alignSelf: 'center' }}>
                    Longez le port de Morlaix et traversez la passerelle en face de l'IUT,<br />
                    une pause s'impose au bar le Tempo qui offre une vue imprenable sur Morlaix<br />
                    et son viaduc ainsi que sur le port.<br /><br />
                    Plus loin, vous atteindrez aisément le coeur de ville. Visitez Morlaix<br />
                    et ses venelles étroites agrémentées de façades colorées des maisons à pans de bois.<br /><br />
                    <a href='https://www.roscoff-tourisme.com/fr/a-voir-a-faire/randonnees/randonnees-a-pied/le-gr-34-le-sentier-des-douaniers/' 
                        target='_blank' 
                        rel='noreferrer noopener' 
                        style={{ textDecoration: 'none', fontWeight: 900 }}
                    >
                        ACCÉDER AU PLAN
                    </a>
                </Typography>
            </Box>
        </Container>
    </>
  )
}
