export interface ParsedDate {
    year: string | undefined;
    month: string | undefined;
    day: string | undefined;
  }
  
  export function parseDate(dateString: string): ParsedDate {
    // Regular expressions to match different date formats
    const bceRegex = /^(\d+)\s*BCE$/;
    const adRegex = /^(\d+)\s*AD$/;
    const centuryRegex = /^(\d+)(st|nd|rd|th)\s*Century\s*(BCE|CE|AD)?$/;
    const rangeRegex = /^(\d+)-(\d+)\s*(BCE|AD|CE)?$/;
    const fullDateRegex = /^(\d{4})-(\d{2})-(\d{2})\s*(BCE|CE|AD)?$/;
  
    // Check for BCE dates
    if (bceRegex.test(dateString)) {
      const match = dateString.match(bceRegex);
      const year = `-${match![1]}`;  // Year as a negative string
      return { year, month: undefined, day: undefined };
    }
  
    // Check for AD dates
    if (adRegex.test(dateString)) {
      const match = dateString.match(adRegex);
      const year = match![1];
      return { year, month: undefined, day: undefined };
    }
  
    // Check for full dates in BCE or AD/CE
    if (fullDateRegex.test(dateString)) {
      const match = dateString.match(fullDateRegex);
      const year = (match![4] === 'BCE') ? `-${match![1]}` : match![1];
      const month = match![2];
      const day = match![3];
      return { year, month, day };
    }
  
    // Check for centuries
    if (centuryRegex.test(dateString)) {
      const match = dateString.match(centuryRegex);
      let year = (parseInt(match![1], 10) - 1) * 100 + 1; // Start of the century
      if (match![3] === 'BCE') year = -year; // Convert to BCE if necessary
      return { year: year.toString(), month: undefined, day: undefined };
    }
  
    // Check for ranges
    if (rangeRegex.test(dateString)) {
      const match = dateString.match(rangeRegex);
      const startYear = match![3] === 'BCE' ? `-${match![1]}` : match![1];
      return { year: startYear, month: undefined, day: undefined };
    }
  
    // If no match, return undefined for all values
    return { year: undefined, month: undefined, day: undefined };
  }
  