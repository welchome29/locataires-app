import React from 'react'
import LoisirsNavBar from '../../components/LoisirsNavBar'
import { Typography } from '@mui/material'

import BestPeche from '../../components/BestPeche'


export default function Peches() {
  return (
    <>
      <LoisirsNavBar />
      <Typography variant='h4' style={{ marginTop: '50px', textAlign: 'center', marginBottom: '50px' }}>
            LES SORTIES PÊCHES
      </Typography>
      <BestPeche />
    </>
  )
}
