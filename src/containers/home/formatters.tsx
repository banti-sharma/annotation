const dateFormatter = new Intl.DateTimeFormat(navigator.language)
const currencyFormatter = new Intl.NumberFormat(navigator.language, {
  style: 'currency',
  currency: 'eur',
})

export function Date({ timestamp }: { timestamp: number }) {
  return <>{dateFormatter.format(timestamp)}</>
}

export function CurrencyFormatter({ value }: { value: number }) {
  return <>{currencyFormatter.format(value)}</>
}

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
    name: 'description',
    width: 220,
  },
  {
    key: 'type',
    name: 'type',
    width: 120,
  },
  {
    key: 'labels',
    name: 'Labels',
    width: 180,
  },
  {
    key: 'created_on',
    name: 'Created On',
    width: 160,
  },
  {
    key: 'modified_on',
    name: 'Modified On',
    width: 150,
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
    name: 'Tagged?',
    width: 150,
  },
]
