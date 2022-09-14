import { formatDateTimeByOutputFormat } from '../../util/dataFormatters'

export const getColumns = () => [
  {
    key: 'id',
    name: 'ID',
    width: 60,
    frozen: true,
    resizable: false,
  },
  {
    key: 'name',
    name: 'Name',
    width: 120,
  },

  {
    key: 'score',
    name: 'Score',
    width: 150,
  },
  {
    key: 'role',
    name: 'Role',
    width: 150,
  },
  {
    key: 'member_since',
    name: 'Member Since',
    width: 160,
    formatter: (props: any) => {
      const text = formatDateTimeByOutputFormat(props.row.member_since, 'dd MMM yyyy HH:mm')
      return <label title={text}>{text}</label>
    },
  },
  {
    key: 'last_active',
    name: 'Last Active',
    width: 150,
    formatter: (props: any) => {
      const text = formatDateTimeByOutputFormat(props.row.last_active, 'dd MMM yyyy HH:mm')
      return <label title={text}>{text}</label>
    },
  },
]
