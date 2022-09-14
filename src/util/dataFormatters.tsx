import format from 'date-fns/format'
import parse from 'date-fns/parse'

const dateFormatter = new Intl.DateTimeFormat(navigator.language)
const currencyFormatter = new Intl.NumberFormat(navigator.language, {
  style: 'currency',
  currency: 'eur',
})

export function DateFormatter({ timestamp }: { timestamp: number }) {
  return <>{dateFormatter.format(timestamp)}</>
}

export function CurrencyFormatter({ value }: { value: number }) {
  return <>{currencyFormatter.format(value)}</>
}

export const reformatDate = (val: any, inputFormat: any, outputFormat: any) => {
  if (val === null || val === undefined) {
    return val
  }
  return format(parse(val, inputFormat, new Date()), outputFormat)
}

export const formatDateTimeByOutputFormat = (val: any, outputFormat: string) => {
  if (val === null || val === undefined) {
    return val
  }

  return val.includes('Z')
    ? format(new Date(val), outputFormat)
    : format(new Date(`${val}Z`), outputFormat)
}
