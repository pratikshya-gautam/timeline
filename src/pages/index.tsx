import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
// import Timeline from '../components/timeline-style'
import data from '../data/data.json'
import MyNavbar from '../components/nav-bar'
import TimelineComponent from '../components/timeline'
import { Typography } from '@mui/material'
import EventCard from '../components/timeline/event-card'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main
        style={{
          background: 'rgba(245, 245, 245)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div style={{ textAlign: 'center', padding: '32px' }}>
          <Typography variant="h4">
            Development of Hinduism Timeline Chart
          </Typography>
        </div>
        <div>
          <TimelineComponent data={data} />
        </div>
      </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
