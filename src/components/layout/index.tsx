import { Box } from '@mui/material'
import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../store'

interface ILayout {
  children: any
}

export const Layout: FC<ILayout> = ({ children }) => {
  const navigate = useNavigate()
  const isAuthenticated = useAppSelector((x) => x.auth.isAuthenticated)
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [navigate, isAuthenticated])

  return isAuthenticated ? <Box>{children}</Box> : null
}
