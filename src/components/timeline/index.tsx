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
import EventCard from './event-card'

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
            <TimelineItem key={index}>
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
                <EventCard
                  data={event}
                  pointer={`event-${index}`}
                  leftCard={index % 2 === 0}
                />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  )
}

export default TimelineComponent
