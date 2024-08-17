import { parseDate } from "./parse-date-string";

export function convertADtoBS(date: string): string {
    const { year, month, day } = parseDate(date);

    // Ensure year is defined, if not return the original date string
    if (!year) {
        return date;
    }

    // Convert year, month, and day to numbers (use default values if undefined)
    const adYear = parseInt(year, 10);
    const adMonth = month ? parseInt(month, 10) : undefined; 
    const adDay = day ? parseInt(day, 10) : undefined;

    // Define the offset between AD and BS
    const bsYearOffset = 56;
    const bsMonthOffset = 8;
    const bsDayOffset = 17;

    // Calculate the BS year
    let bsYear = adYear + bsYearOffset;

    // Calculate the BS month and day
    let bsMonth = adMonth !== undefined ? adMonth + bsMonthOffset : undefined;
    let bsDay = adDay !== undefined ? adDay + bsDayOffset : undefined;

    // Adjust the month and year if necessary
    if (bsMonth !== undefined && bsMonth > 12) {
        bsMonth -= 12;
        bsYear += 1;
    }

    // Adjust the day and month if necessary
    if (bsDay !== undefined && bsDay > 30) {
        bsDay -= 30;
        if (bsMonth !== undefined) {
            bsMonth += 1;
            if (bsMonth > 12) {
                bsMonth -= 12;
                bsYear += 1;
            }
        }
    }

    // Return the appropriate date string based on available components
    if (bsDay === undefined && bsMonth === undefined) {
        return `${bsYear}`;
    } else if (bsDay === undefined) {
        return `${bsYear}-${String(bsMonth).padStart(2, '0')}`;
    } else {
        return `${bsYear}-${String(bsMonth).padStart(2, '0')}-${String(bsDay).padStart(2, '0')}`;
    }
}
