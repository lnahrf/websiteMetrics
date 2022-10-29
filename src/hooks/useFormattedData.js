import { useCallback, useEffect, useState } from 'react'
import { sortByDateTime } from 'utils/dateTime'

export default function useFormattedData(data) {
    const [formattedData, setFormattedData] = useState([])

    //Sort by date and add ids to the data for Material UI's datagrid
    const identifyData = useCallback(data => {
        const sortedData = sortByDateTime(data)

        return sortedData.map((item, i) => {
            item.id = `metric_${i}`
            return item
        })
    }, [])

    useEffect(() => {
        setFormattedData(identifyData(data))
    }, [data])

    return { formattedData }
}
