import React, { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Paper,
  Chip,
  Container,
} from '@mui/material'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab'
import { getRandomMutedColor } from '../../shared/get-muted-color'
import type { TimelineItem as TimelineData } from '../types'

interface TimelineComponentProps {
  data: TimelineData[]
}

const TimelineComponent: React.FC<TimelineComponentProps> = ({ data = [] }) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [activeDate, setActiveDate] = useState(data[0].date)

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2
    const activeEvent = data.find((event, index) => {
      const element = document.getElementById(`event-${index}`)
      if (element) {
        const rect = element.getBoundingClientRect()
        return rect.top <= scrollPosition && rect.bottom >= scrollPosition
      }
      return false
    })

    if (activeEvent) {
      setActiveDate(activeEvent.date)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box position="relative" sx={{ background: 'rgba(245, 245, 245)' }}>
      {/* Floating Date Indicator */}
      <Box
        position="fixed"
        top="20px"
        right="3%"
        zIndex={1000}
        padding={2}
        borderRadius={2}
      >
        <Chip label={activeDate} variant="outlined" />
      </Box>

      {/* Timeline */}
      <Container>
        <Timeline position={isSmallScreen ? 'left' : 'alternate'}>
          {data.map((event, index) => (
            <TimelineItem id={`event-${index}`} key={index}>
              {!isSmallScreen && (
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    {event.date}
                  </Typography>
                </TimelineOppositeContent>
              )}
              <TimelineSeparator>
                <TimelineDot sx={{ background: getRandomMutedColor() }} />
                {index < data.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  elevation={3}
                  style={{ padding: '16px', borderRadius: '16px' }}
                >
                  <Typography variant="h6" component="h1">
                    {event.title}
                  </Typography>
                  <Typography>{event.descr}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    References:
                  </Typography>
                  <ul>
                    {event.eventList &&
                      event.eventList.map((item, idx) => (
                        <li key={idx}>
                          <Typography variant="body2">{item.event}</Typography>
                        </li>
                      ))}
                  </ul>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  )
}

export default TimelineComponent
