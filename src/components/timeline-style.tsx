import React from "react";
import { css } from "@emotion/react";
import { TimelineItem } from "./types";

const timelineStyles = css`
  --color: rgba(30, 30, 30);
  --bgColor: rgba(245, 245, 245);
  --col-gap: 2rem;
  --row-gap: 2rem;
  --line-w: 0.25rem;
  --accent-color: #000; /* Default accent color, will be overridden */

  min-height: 100vh;

  display: grid;
  align-content: center;
  gap: 2rem;
  padding: 2rem;
  font-family: "Poppins", sans-serif;
  color: var(--color);
  background: var(--bgColor);

  h1 {
    text-align: center;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-columns: max-content;
    column-gap: var(--col-gap);
    list-style: none;
    width: min(60rem, 90%);
    margin-inline: auto;
  }

  ul::before {
    content: "";
    grid-column: 1;
    grid-row: 1 / span 200;
    background: rgb(225, 225, 225);
    border-radius: calc(var(--line-w) / 2);
  }

  ul li:not(:last-child) {
    margin-bottom: var(--row-gap);
  }

  ul li {
    grid-column: 2;
    --inlineP: 1.5rem;
    margin-inline: var(--inlineP);
    grid-row: span 2;
    display: grid;
    grid-template-rows: min-content min-content min-content;
  }

  ul li .date {
    --dateH: 3rem;
    height: var(--dateH);
    margin-inline: calc(var(--inlineP) * -1);
    text-align: center;
    color: white;
    font-size: 1.25rem;
    font-weight: 700;
    display: grid;
    place-content: center;
    position: relative;
    border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
    background-color: var(--accent-color); /* Use the accent color */
  }

  ul li .date::before {
    content: "";
    width: var(--inlineP);
    aspect-ratio: 1;
    background-image: linear-gradient(
      var(--accent-color) 100%,
      transparent
    ); /* Use the accent color */
    position: absolute;
    top: 100%;
    clip-path: polygon(0 0, 100% 0, 0 100%);
    right: 0;
  }

  ul li .date::after {
    content: "";
    position: absolute;
    width: 2rem;
    aspect-ratio: 1;
    background: var(--bgColor);
    border: 0.3rem solid var(--accent-color); /* Use the accent color */
    border-radius: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    right: calc(100% + var(--col-gap) + var(--line-w) / 2);
  }

  ul li .title,
  ul li .descr {
    background: var(--bgColor);
    position: relative;
    padding-inline: 1.5rem;
  }

  ul li .title {
    overflow: hidden;
    padding-block-start: 1.5rem;
    padding-block-end: 1rem;
    font-weight: 500;
  }

  ul li .descr {
    padding-block-end: 1.5rem;
    font-weight: 300;
  }

  ul li .title::before,
  ul li .descr::before {
    content: "";
    position: absolute;
    width: 90%;
    height: 0.5rem;
    background: rgba(0, 0, 0, 0.5);
    left: 50%;
    border-radius: 50%;
    filter: blur(4px);
    transform: translate(-50%, 50%);
  }

  ul li .title::before {
    bottom: calc(100% + 0.125rem);
  }

  ul li .descr::before {
    z-index: -1;
    bottom: 0.25rem;
  }

  @media (min-width: 40rem) {
    ul {
      grid-template-columns: 1fr var(--line-w) 1fr;
    }
    ul::before {
      grid-column: 2;
    }
    ul li:nth-child(odd) {
      grid-column: 1;
    }
    ul li:nth-child(even) {
      grid-column: 3;
    }

    ul li:nth-child(2) {
      grid-row: 2/4;
    }

    ul li:nth-child(odd) .date::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%);
      left: 0;
    }

    ul li:nth-child(odd) .date::after {
      transform: translate(-50%, -50%);
      left: calc(100% + var(--col-gap) + var(--line-w) / 2);
    }
    ul li:nth-child(odd) .date {
      border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
    }
  }
`;

const TimelineCard = ({ date, title, descr, color }: TimelineItem) => (
  <li
    css={css`
      --accent-color: ${color};
    `}
  >
    <div className="date">{date}</div>
    <div className="title">{title}</div>
    <div className="descr">{descr}</div>
  </li>
);

export interface TimelineProps {
  data: TimelineItem[];
  title: string;
}

const Timeline: React.FC<TimelineProps> = ({ data, title }) => (
  <div css={timelineStyles}>
    <h1>{title}</h1>
    <ul>
      {data.map((item, index) => (
        <TimelineCard
          key={index}
          date={item.date}
          title={item.title}
          descr={item.descr}
          color={item.color}
        />
      ))}
    </ul>
  </div>
);

export default Timeline;
