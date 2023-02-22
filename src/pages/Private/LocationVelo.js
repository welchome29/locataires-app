import { Typography } from '@mui/material'
import React from 'react'
import BestVelo from '../../components/BestVelo'
import LoisirsNavBar from '../../components/LoisirsNavBar'

export default function LocationVelo() {
  return (
    <>
      <LoisirsNavBar />
      <Typography variant='h4' style={{ marginTop: '50px', textAlign: 'center', marginBottom: '50px' }}>
            LOCATION DE VÉLO
      </Typography>
      <BestVelo />
    </>
  )
}
