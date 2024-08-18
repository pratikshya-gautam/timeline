import React from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/system'

// Styled component for glass effect
const GlassBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.2)', // semi-transparent white
  backdropFilter: 'blur(10px)', // glass effect
  borderRadius: '12px', // rounded edges
  padding: '16px', // small padding
  border: '1px solid rgba(255, 255, 255, 0.3)', // optional border for better visibility
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // optional shadow for depth
  width: '200px', // small width
  height: '150px', // small height
}))

const GlassEffectBox = (props) => {
  return (
    <GlassBox>
      <p>{props.children}</p>
    </GlassBox>
  )
}

export default GlassEffectBox
