import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Timeline from "../components/timeline-style";
import data from "../data/nepalies-history.json";
import MyNavbar from "../components/nav-bar";


const NepaliesHistory: React.FC<PageProps> = () => {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <Timeline data={data} title="History of Nepal 🇳🇵" />
      </main>
    </>
  );
};

export default NepaliesHistory;

export const Head: HeadFC = () => {
  return (
    <>
      <title>History of Nepal 🇳🇵 </title>
      <link rel="canonical" href="https://github.com/pratikshya-gautam/timeline" />
      <meta property="og:title" content="Nepali History Timeline" />
      <meta
        property="og:description"
        content="Explore the rich history of Nepal with detailed timeline."
      />
      <meta property="og:image" content="/map_nepal.jpg" />
    </>
  );
};
