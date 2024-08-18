import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Timeline from '../components/timeline-style'
import data from '../data/nepalies-history.json'
import MyNavbar from '../components/nav-bar'
import TimelineComponent from '../components/timeline'
import { Typography } from '@mui/material'

const NepaliesHistory: React.FC<PageProps> = () => {
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
          <Typography variant="h4">History of Nepal 🇳🇵</Typography>
        </div>
        <div>
          <TimelineComponent data={data} />
        </div>
      </main>
    </>
  )
}

export default NepaliesHistory

export const Head: HeadFC = () => {
  return (
    <>
      <title>History of Nepal 🇳🇵 </title>
      <link
        rel="canonical"
        href="https://github.com/pratikshya-gautam/timeline"
      />
      <meta property="og:title" content="Nepali History Timeline" />
      <meta
        property="og:description"
        content="Explore the rich history of Nepal with detailed timeline."
      />
      <meta property="og:image" content="/map_nepal.jpg" />
    </>
  )
}
