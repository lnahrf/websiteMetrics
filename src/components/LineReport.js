import { useContext, useMemo } from 'react'
import { Line } from 'react-chartjs-2'

import DataCtx from 'context/DataCtx'
import { formatDateTime } from 'utils/dateTime'
import Colors from 'enums/Colors'

import 'styles/lineChart.scss'

export default function LineReport() {
    const data = useContext(DataCtx)

    const lineChartData = useMemo(
        () => ({
            labels: data.map(item => formatDateTime(item.timestamp)),
            datasets: [
                {
                    label: 'Impressions',
                    backgroundColor: Colors.lightBlue,
                    borderColor: Colors.lightBlue,
                    data: data.map(item => item.impressions)
                },
                {
                    label: 'Clicks',
                    backgroundColor: Colors.darkBlue,
                    borderColor: Colors.darkBlue,
                    data: data.map(item => item.clicks)
                },
                {
                    label: 'Cost',
                    backgroundColor: Colors.orange,
                    borderColor: Colors.orange,
                    data: data.map(item => item.cost)
                },
                {
                    label: 'Conversions',
                    backgroundColor: Colors.red,
                    borderColor: Colors.red,
                    data: data.map(item => item.conversions)
                }
            ]
        }),
        [data]
    )
    return (
        <div className="line-chart-wrapper">
            <Line options={{ responsive: true, maintainAspectRatio: false }} data={lineChartData} />
        </div>
    )
}
