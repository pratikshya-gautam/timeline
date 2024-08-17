import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Timeline from "../components/timeline-style"
import data from "../data/nepalies-history.json"
import MyNavbar from "../components/nav-bar"
console.log(data.map((r)=>r.date))
const NepaliesHistory: React.FC<PageProps> = () => {
  return (
    <>
    <header>
      <MyNavbar/>
    </header>
    <main>
      <Timeline data={data} title='History of Nepal'/>
    </main>
    </>
  )
}

export default NepaliesHistory

export const Head: HeadFC = () => <title>History of Nepal</title>
