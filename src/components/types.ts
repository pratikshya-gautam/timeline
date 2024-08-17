export interface TimelineItem {
    date: string;
    title: string;
    descr: string;
    color: string;
    eventList?: {
      event: string,
      description: string,
      reference: string
    }[]
  }