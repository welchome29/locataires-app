import { Add, Remove } from '@mui/icons-material'
import { IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function QuantityControl(props) {

    const [quantity, setQuantity] = useState(props.value)

    const handleChange = (newQuantity) => {
        if(newQuantity >= 1) {
            setQuantity(newQuantity)
            props.onChange(newQuantity)
        }
    }

  return (
    <>
        <IconButton onClick={() => handleChange(quantity - 1)}>
            <Remove />
        </IconButton>
        <TextField value={quantity} sx={{ width: '50px' }} style={{ textAlign: 'center' }}/>
        <IconButton onClick={() => handleChange(quantity + 1)}>
            <Add />
        </IconButton>
    </>
  )
}
