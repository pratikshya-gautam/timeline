export interface TimelineItem {
    date: string;
    title: string;
    descr: string;
    s
    color: string;
    eventList?: {
      event: string,
      description: string,
      reference: string | string[]
    }[]
  }