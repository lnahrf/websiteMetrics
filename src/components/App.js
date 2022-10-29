import DataTable from 'components/DataTable'
import LineReport from 'components/LineReport'
import Header from 'components/Header'
import useFormattedData from 'hooks/useFormattedData'

import sampleData from 'data/sample.json'
import DataCtx from 'context/DataCtx'

import 'styles/global.scss'

export default function App() {
    const { formattedData } = useFormattedData(sampleData.data)

    return (
        <DataCtx.Provider value={formattedData}>
            <Header />
            <LineReport />
            <DataTable />
        </DataCtx.Provider>
    )
}
