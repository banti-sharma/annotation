import './index.css'
import { useEffect, useMemo, useState } from 'react'
import { DataPoint } from '../../types'
import { getColumns } from './formatters'
import DataGrid from 'react-data-grid'
import { getDataPoints, getDataSet } from '../../services/api'
import { Layout } from '../../components/layout'
import { Header } from '../../components/header'
import { Content } from '../../components/layout/Content'
import { useModal } from 'mui-modal-provider'
import { DataPointEditor } from './dataPointEditor'
import { useAppDispatch, useAppSelector } from '../../store'
import Action from '../../store/actionTypes'
function rowKeyGetter(row: DataPoint) {
  return row.id
}

const DataPoints = () => {
  const dispatch = useAppDispatch()
  const columns = useMemo(() => getColumns(), [])
  const rows = useAppSelector((x) => x.dataPoints.data)
  const { showModal } = useModal()

  useEffect(() => {
    getDataPoints().then((rows) => {
      dispatch({ type: Action.SET_DATA, payload: rows })
    })
  }, [])

  const handleRowDoubleClick = async (row: DataPoint) => {
    const dataSet = await getDataSet(row.id)
    const modal = showModal(DataPointEditor, {
      dataSet,
      row,
      onConfirm: (row: DataPoint) => {
        modal.hide()
      },
      onClose: () => {
        modal.hide()
      },
    })
  }

  return (
    <Layout>
      <Header />
      <Content>
        <DataGrid
          rowKeyGetter={rowKeyGetter}
          columns={columns}
          rows={rows}
          className="rdg-light full-height"
          onRowDoubleClick={handleRowDoubleClick}
        />
      </Content>
    </Layout>
  )
}

export default DataPoints
