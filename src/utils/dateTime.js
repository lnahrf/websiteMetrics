import { format, parse, parseISO } from 'date-fns'

// Using parseISO to fix Safari's invalid time range bug with date-fns
export const formatDateTime = timestamp => format(parseISO(timestamp), 'dd LLL yyyy, hh:mm')

export const sortByDateTime = data =>
    data.sort((a, b) => {
        const aTime = new Date(a.timestamp)
        const bTime = new Date(b.timestamp)
        return aTime > bTime ? 1 : -1
    })
