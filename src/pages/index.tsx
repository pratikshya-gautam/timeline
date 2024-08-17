import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Timeline from "../components/timeline-style"
import data from "../data/data.json"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <Timeline data={data} title='Development of Hinduism Timeline Chart'/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
