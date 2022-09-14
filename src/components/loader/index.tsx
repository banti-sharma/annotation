import { CircularProgress } from '@mui/material'
import { CSSProperties } from 'react'

const style: CSSProperties = {
  height: '100%',
  width: '100%',
  position: 'absolute',
  display: 'grid',
  alignItems: 'center',
  justifyItems: 'center',
}

export const Loader = () => {
  return (
    <div style={style}>
      <CircularProgress color="inherit" />
    </div>
  )
}
