import './index.css'
import { useEffect, useMemo, useState } from 'react'
import { User } from '../../types'
import { getColumns } from './formatters'
import DataGrid from 'react-data-grid'
import { getUsers } from '../../services/api'
import { Layout } from '../../components/layout'
import { Header } from '../../components/header'
import { Content } from '../../components/layout/Content'

function rowKeyGetter(row: User) {
  return row.id
}

const Users = () => {
  const columns = useMemo(() => getColumns(), [])
  const [rows, setRows] = useState<User[]>([])
  useEffect(() => {
    getUsers().then((rows) => {
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

export default Users
