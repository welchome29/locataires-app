import React from 'react'
import LoisirsNavBar from '../../components/LoisirsNavBar'
import backGround from '../../assets/bg-crete.jpg'
import creteParcabout from '../../assets/crete_parcabout.jpg'
import creteAbbaye from '../../assets/crete_abbaye.jpg'
import creteCragou from '../../assets/crete_cragou.jpg'
import { Box, Container } from '@mui/system'
import { Typography } from '@mui/material'

export default function InfosCrete() {
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
                BALADE SUR LES CRÊTES DES MONTS D'ARRÉE
            </Typography>
            <Typography variant='h4' sx={{ marginTop: '50px' }}>
                [ CABANES PERCHÉES AU PARCABOUT ]
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px', flexWrap: 'wrap', gap: '25px' }}>
                <img src={creteParcabout} alt='Domaine du Treuscoat' className='img-fluid' style={{ borderRadius: '20px' }}/>
                <Typography variant='body1' sx={{ alignSelf: 'center' }}>
                    Profitez d'un parcours de 500m sur des filets tendus entre les arbres.<br />
                    Au domaine du Treuscoat, ses hébergements insolites porposent divers univers :<br />
                    cabanes perchées, yourtes, etc... Certains sont équipés d'un bain nordique privatif<br />
                    et d'un spa.<br /><br />
                    <a href='https://www.domaine-treuscoat.fr/' 
                        target='_blank' 
                        rel='noreferrer noopener' 
                        style={{ textDecoration: 'none', fontWeight: 900 }}
                    >
                        PLUS D'INFOS
                    </a>
                </Typography>
            </Box>
            <hr style={{ background: 'grey', height: '3px', border: 'none', width: '80%', marginTop: '50px' }} />
            <Typography variant='h4' sx={{ marginTop: '50px' }}>
                [ VISITE DU PATRIMOINE ]
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center', marginTop: '50px', flexWrap: 'wrap', gap: '25px' }}>
                <img src={creteAbbaye} alt='Abbaye du Relec' className='img-fluid' style={{ borderRadius: '20px' }}/>
                <Typography variant='body1' sx={{ alignSelf: 'center' }}>
                    Une atmosphère reposante dans un cadre naturel au bord d'un étang.<br /><br />
                    L'abbaye du Relec est l'une des rares abbayes cisterciennes en Bretagne.<br />
                    Sont potager biologique est cultivé par les moines.<br /><br />
                    <a href='https://www.baiedemorlaix.bzh/fr/activite/abbaye-du-relec-pcubre029cy00114/' 
                        target='_blank' 
                        rel='noreferrer noopener' 
                        style={{ textDecoration: 'none', fontWeight: 900 }}
                    >
                        EN SAVOIR PLUS
                    </a>
                </Typography>
            </Box>
            <hr style={{ background: 'grey', height: '3px', border: 'none', width: '80%', marginTop: '50px' }} />
            <Typography variant='h4' sx={{ marginTop: '50px' }}>
                [ LES LANDES DU CRAGOU ]
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '50px', flexWrap: 'wrap', gap: '25px' }}>
                <img src={creteCragou} alt='Domaine du Treuscoat' className='img-fluid' style={{ borderRadius: '20px' }}/>
                <Typography variant='body1' sx={{ alignSelf: 'center' }}>
                    Ce site est essentiellement constitué de landes et de tourbières.<br /><br />
                    Vous pourrez y admirer une diversité parmi laquelle on retrouve<br />
                    des plantes et des animaux rares. Une biodiversité unique que vous pourrez<br />
                    découvrir toute l'année grâce à un sentier de découverte.<br /><br />
                    <a href='https://drive.google.com/file/d/13dpDsyjuiHSvXE_4S_H5646L_Z57ZGYr/view' 
                        target='_blank' 
                        rel='noreferrer noopener' 
                        style={{ textDecoration: 'none', fontWeight: 900 }}
                    >
                        PLUS D'INFOS
                    </a>
                </Typography>
            </Box>
        </Container>
    </>
  )
}
