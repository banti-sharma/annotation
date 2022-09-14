import { Box } from '@mui/material'
import { FC } from 'react'

interface ILayout {
  children: any
}

export const Content: FC<ILayout> = ({ children }) => {
  return (
    <Box sx={{ margin: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {children}
    </Box>
  )
}
