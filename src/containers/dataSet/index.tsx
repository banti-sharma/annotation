import './index.css'
import { useEffect, useMemo, useState } from 'react'
import { DataSet as DataSetRow } from '../../types'
import { getColumns } from './formatters'
import DataGrid from 'react-data-grid'
import { getDataSets } from '../../services/api'
import { Layout } from '../../components/layout'
import { Header } from '../../components/header'
import { Content } from '../../components/layout/Content'

function rowKeyGetter(row: DataSetRow) {
  return row.id
}

const DataSet = () => {
  const columns = useMemo(() => getColumns(), [])
  const [rows, setRows] = useState<DataSetRow[]>([])

  useEffect(() => {
    getDataSets().then((rows) => {
      setRows(rows)
    })
  }, [])

  return (
    <Layout>
      <Header />
      <Content>
        <DataGrid
          rowKeyGetter={rowKeyGetter}
          columns={columns}
          rows={rows}
          className="rdg-light full-height"
        />
      </Content>
    </Layout>
  )
}

export default DataSet
