import { DataPoint, DataPointLabel } from '../../types'
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
    key: 'dataset_id',
    name: 'DataSet ID',
    width: 120,
  },

  {
    key: 'audio',
    name: 'Audio',
    width: 300,
    formatter: (props: any) => {
      return (
        <audio>
          <source src={props.row.audio} type="audio/mpeg"></source>
        </audio>
      )
    },
  },
  {
    key: 'alternatives',
    name: 'Alternatives',
    width: 220,
  },
  {
    key: 'tagged_by',
    name: 'Tagged By',
    width: 120,
  },
  {
    key: 'labels',
    name: 'Labels',
    width: 180,
    formatter: (props: any) => {
      const row = props.row as DataPoint
      //      const text = row.labels.map((x: DataPointLabel) => x.labels.join(', ')).join(', ')
      return <label>{}</label>
    },
  },
  {
    key: 'score',
    name: 'Score',
    width: 150,
  },
  {
    key: 'state',
    name: 'State',
    width: 150,
  },
  {
    key: 'is_delete',
    name: 'Is Deleted',
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
    key: 'last_updated_on',
    name: 'Last Updated',
    width: 150,
    formatter: (props: any) => {
      const text = formatDateTimeByOutputFormat(props.row.last_updated_on, 'dd MMM yyyy HH:mm')
      return <label title={text}>{text}</label>
    },
  },
]
