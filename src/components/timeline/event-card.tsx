import React, { useState } from 'react'
import { Card, Typography, Grid, Box, Snackbar, Alert } from '@mui/material'
import LinkIcon from '@mui/icons-material/Link'
import { IconButton } from '@mui/material'
import { allStyles } from './styles'
import ReferenceList from './refrences'
import { TimelineItem } from '../types'
import CollapsibleParagraph from './collapsible-paragraph'
import ReferenceListV2 from './refrences-v2'

function generateIdFromText(text: string) {
  return text
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing whitespace
    .replace(/[^a-z0-9\s]/g, '') // Remove any special characters except spaces
    .replace(/\s+/g, '-')
  // Replace spaces with hyphens
}

export default function EventCard({
  data,
  leftCard,
  pointer,
}: {
  data: TimelineItem
  pointer: string
  leftCard: boolean
}) {
  const id = generateIdFromText(data.title)
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const copyLinkToClipboard = (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`
    navigator.clipboard.writeText(url).then(() => {
      setOpenSnackbar(true)
    })
  }

  const handleCloseSnackbar = (event: any, reason: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenSnackbar(false)
  }

  return (
    <>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          /* @ts-ignore */
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          Link copied to clipboard!
        </Alert>
      </Snackbar>
      <Card sx={allStyles.card}>
        <Grid container flexDirection={!leftCard ? 'row-reverse' : undefined}>
          <Grid item sm={10}>
            <Box sx={{ padding: 2 }}>
              <Typography
                id={id}
                variant="subtitle1"
                sx={{
                  ...allStyles.gradientText,
                  ...allStyles.title,
                }}
              >
                {data.title}
                <IconButton
                  onClick={() => copyLinkToClipboard(id)}
                  title="Copy link"
                >
                  <LinkIcon />
                </IconButton>
              </Typography>
              <CollapsibleParagraph description={data.descr} />
            </Box>
          </Grid>
          <Grid item sm={1} justifySelf="center" alignSelf="center">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography
                textAlign="center"
                sx={{
                  fontWeight: 900,
                }}
              >
                {data.date}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {data.references ? (
          <ReferenceListV2 references={data.references} />
        ) : (
          <Box sx={{ padding: 2 }} id={pointer}>
            <ReferenceList eventList={data.eventList} />
          </Box>
        )}
      </Card>
    </>
  )
}
