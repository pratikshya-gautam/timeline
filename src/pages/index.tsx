import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Timeline from "../components/timeline-style"
import data from "../data/data.json"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Timeline data={data} title='Development of Hinduism Timeline Chart'/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
