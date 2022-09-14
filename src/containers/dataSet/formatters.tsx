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
    key: 'source',
    name: 'Source',
    width: 120,
  },
  {
    key: 'description',
    name: 'Description',
    width: 220,
  },
  {
    key: 'type',
    name: 'Type',
    width: 120,
  },
  {
    key: 'labels',
    name: 'Labels',
    width: 180,
  },

  {
    key: 'maximum_voters',
    name: 'Maximum Voters',
    width: 150,
  },
  {
    key: 'minimum_voters',
    name: 'Minimum Voters',
    width: 150,
  },
  {
    key: 'minumum_consensus',
    name: 'Minumum Consensus',
    width: 150,
  },
  {
    key: 'is_tagged',
    name: 'Is Tagged',
    width: 150,
  },
  {
    key: 'created_on',
    name: 'Created On',
    width: 160,
    formatter: (props: any) => {
      const text = formatDateTimeByOutputFormat(props.row.created_on, 'dd MMM yyyy HH:mm')
      return <label title={text}>{text}</label>
    },
  },
  {
    key: 'modified_on',
    name: 'Last Updated on',
    width: 150,
    formatter: (props: any) => {
      const text = formatDateTimeByOutputFormat(props.row.modified_on, 'dd MMM yyyy HH:mm')
      return <label title={text}>{text}</label>
    },
  },
]
