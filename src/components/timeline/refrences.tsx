import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Typography,
} from '@mui/material'
import { Language } from '@mui/icons-material' // Icon for website
import { TimelineItem } from '../types'

export default function ReferenceList({
  eventList = [],
}: {
  eventList: TimelineItem['eventList']
}) {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 600,
      }}
    >
      {eventList.map((reference) => (
        <ListItem key={reference.event} disablePadding>
          <ListItemButton
            component="a"
            href={reference.reference as string}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ borderBottom: '1px solid #ddd', py: 1 }} // Optional styling for separation
          >
            <ListItemIcon>
              <Language /> {/* Website icon */}
            </ListItemIcon>
            <ListItemText
              primary={reference.event}
              secondary={
                <Typography variant="body2" color="textSecondary">
                  {reference.description}
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
