import { Typography } from '@mui/material'
import React from 'react'
import BestSpiritueux from '../../components/BestSpiritueux'
import ShopNavBar from '../../components/ShopNavBar'

export default function Spiritueux() {
  return (
    <>
      <ShopNavBar />
      <Typography variant='h4' style={{ marginTop: '50px', textAlign: 'center' }}>
        SPIRITUEUX
      </Typography>
      <BestSpiritueux />
    </>
  )
}
