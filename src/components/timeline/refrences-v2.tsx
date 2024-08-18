import React, { useState } from 'react'
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Typography,
  Divider,
  Collapse,
  Button,
} from '@mui/material'
import { Language, Visibility, VisibilityOff } from '@mui/icons-material' // Icons for website and view/hide
import ImportContactsIcon from '@mui/icons-material/ImportContacts'

import { TimelineItem } from '../types'

export default function ReferenceListV2({
  references = [],
}: {
  references: TimelineItem['references']
}) {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <div>
      <Button
        onClick={handleToggle}
        startIcon={open ? <VisibilityOff /> : <Visibility />}
        sx={{ mb: 2, ml: 2, color: 'text.primary' }}
      >
        {open ? 'Hide References' : 'View References'}
      </Button>
      <Collapse in={open}>
        <List
          sx={{
            width: '100%',
            maxWidth: 600,
          }}
        >
          {references.map((reference) => (
            <div key={reference.title}>
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  href={reference.link as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ py: 1 }}
                >
                  <ListItemIcon>
                    {reference.link ? <Language /> : <ImportContactsIcon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography>
                        <Typography>{reference.title}</Typography>
                        <Typography variant="overline">
                          | {reference.author}
                        </Typography>
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" color="textSecondary">
                        {reference.description}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </Collapse>
    </div>
  )
}
