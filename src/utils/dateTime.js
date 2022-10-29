import { format } from 'date-fns'

export const formatDateTime = timestamp => format(new Date(timestamp), 'dd LLL yyyy, hh:mm')

export const sortByDateTime = data =>
    data.sort((a, b) => {
        const aTime = new Date(a.timestamp)
        const bTime = new Date(b.timestamp)
        return aTime > bTime ? 1 : -1
    })
