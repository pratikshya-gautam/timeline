import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Box,
} from '@mui/material'
import { allStyles } from './styles'
import ReferenceList from './refrences'
import { TimelineItem } from '../types'

export default function EventCard({
  data,
  leftCard,
  pointer,
}: {
  data: TimelineItem
  pointer: string
  leftCard: boolean
}) {
  return (
    <Card sx={allStyles.card}>
      <Grid container flexDirection={!leftCard ? 'row-reverse' : undefined}>
        <Grid item sm={10}>
          <Box sx={{ padding: 2 }}>
            <Typography
              variant="subtitle1"
              sx={{
                ...allStyles.gradientText,
                ...allStyles.title,
              }}
            >
              {data.title}
            </Typography>
            <Typography sx={allStyles.body}>{data.descr}</Typography>
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
      <Box sx={{ padding: 2 }} id={pointer}>
        <ReferenceList eventList={data.eventList} />
      </Box>
    </Card>
  )
}
