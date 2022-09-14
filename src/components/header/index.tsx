import { useMemo, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { Logo } from '../icons/logo'
import { useNavigate } from 'react-router-dom'
import { Role } from '../../types'
import { useAppDispatch, useAppSelector } from '../../store'
import Action from '../../store/actionTypes'

interface Setting {
  key: string
  label: string
}

interface Page extends Setting {
  roles: Role[]
}

const allPages: Page[] = [
  { key: '/dataset', label: 'Data Set', roles: [Role.Admin] },
  { key: '/users', label: 'Users', roles: [Role.Admin, Role.Reviewer] },
  { key: '/data-points', label: 'Data Points', roles: [Role.Admin, Role.Reviewer, Role.Member] },
]
const settings = [{ key: 'logout', label: 'Logout' }]

export const Header = () => {
  const dispatch = useAppDispatch()
  const userRole = useAppSelector((x) => x.auth?.user?.role)
  const navigate = useNavigate()
  const pages = useMemo(() => {
    return userRole ? allPages.filter((x) => x.roles.indexOf(userRole) > -1) : []
  }, [userRole])

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = (page: Setting) => {
    setAnchorElNav(null)
    navigate(page.key)
  }

  const handleCloseUserMenu = (setting: Setting) => {
    setAnchorElUser(null)
    if (setting.key === 'logout') {
      dispatch({ type: Action.LOGOUT })
      navigate('/login')
    }
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            onClick={() => handleCloseNavMenu({ key: '/', label: 'Home' })}
            sx={{
              display: { xs: 'none', md: 'flex', cursor: 'pointer' },
            }}
          >
            <Button sx={{ color: 'white' }}>
              <Logo />
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.key} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <Logo />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.key}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.key} onClick={() => handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
