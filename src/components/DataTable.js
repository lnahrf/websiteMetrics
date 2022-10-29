import { useContext, useMemo } from 'react'
import { DataGrid } from '@mui/x-data-grid'

import DataCtx from 'context/DataCtx'
import { formatDateTime } from 'utils/dateTime'

import 'styles/dataTable.scss'

export default function DataTable() {
    const data = useContext(DataCtx)

    const columns = useMemo(
        () => [
            {
                field: 'timestamp',
                headerName: 'Date',
                type: 'dateTime',
                width: 200,
                valueFormatter: item => formatDateTime(item.value)
            },
            { field: 'impressions', headerName: 'Impressions', type: 'number' },
            { field: 'clicks', headerName: 'Clicks', type: 'number' },
            { field: 'cost', headerName: 'Cost', type: 'number' },
            { field: 'conversions', headerName: 'Conversions', type: 'number' }
        ],
        []
    )

    return (
        <div className="data-table-wrapper">
            <DataGrid rows={data} columns={columns} pageSize={50} rowsPerPageOptions={[50]} />
        </div>
    )
}
