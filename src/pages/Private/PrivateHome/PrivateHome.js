import { Typography } from '@mui/material'
import React from 'react'
import backGround from '../../../assets/bg-home.jpg'
import BestActivity from '../../../components/BestActivity'
import BestResto from '../../../components/BestResto'
import ProductNew from '../../../components/ProductNew'
import ProductVedette from '../../../components/ProductVedette'
import '../../../styles/PrivateHome.css'

export default function PrivateHome() {
  return (
    <>
      <div className='container' style={{margin: 0, padding: 0, maxWidth: "1920px"}}>
        <img src={backGround} alt='' className='img-fluid'/>
      </div>
      <div className='container' style={{marginLeft: 0, marginRight: 0, marginTop: "50px", marginBottom: "50px", padding: 0, maxWidth: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px' }}>
        <Typography variant='h2'>
         Produits Vedettes
        </Typography>
        <ProductVedette />
        <Typography variant='h2'>
          Nouveautés
        </Typography>
        <ProductNew />
        <Typography variant='h2'>
          Activités les plus demandées
        </Typography>
        <BestActivity />
        <Typography variant='h2'>
          Les Meilleurs Restaurants
        </Typography>
        <BestResto />
      </div>
    </>
    
  )
}
