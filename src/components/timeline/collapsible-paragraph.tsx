import React, { useState } from 'react'
import { Collapse, Button, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { allStyles } from './styles'

const TEXT_LENGTH = 110

function CollapsibleParagraph({ description }: { description: string }) {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  if (description.length < TEXT_LENGTH) {
    return <Typography sx={allStyles.body}>{description}</Typography>
  }

  // Only show readme if text lenght is more then 300
  return (
    <div>
      <Typography sx={allStyles.body}>
        {open ? description : description.slice(0, TEXT_LENGTH) + '...'}
      </Typography>
      <Button
        onClick={handleToggle}
        endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        variant="text"
        color="primary"
        style={{ marginBottom: '1rem' }}
      >
        {open ? 'Show Less' : 'Read More'}
      </Button>
    </div>
  )
}

export default CollapsibleParagraph
