import { Typography } from '@mui/material'
import React from 'react'
import BestBienEtre from '../../components/BestBienEtre'
import LoisirsNavBar from '../../components/LoisirsNavBar'

export default function BienEtre() {
  return (
    <>
      <LoisirsNavBar />
      <Typography variant='h4' style={{ marginTop: '50px', textAlign: 'center', marginBottom: '50px' }}>
            LES PRESTATIONS BIEN-ÊTRE
      </Typography>
      <BestBienEtre />
    </>
  )
}
