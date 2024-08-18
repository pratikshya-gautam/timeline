export type Reference = {
  title: string
  author: string
  description: string
  link?: string
}

export interface TimelineItem {
  date: string
  title: string
  descr: string
  color: string
  eventList?: {
    event: string
    description: string
    reference: string | string[]
  }[]
  references?: Reference[]
}
