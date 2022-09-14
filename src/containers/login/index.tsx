import { AdminPanelSettingsSharp, People, RateReviewOutlined } from '@mui/icons-material'
import { Box, Button, Card } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../store'
import { Role } from '../../types'
import { setUserRole } from './login.actions'

const buttonStyle = { justifyContent: 'left', paddingLeft: '45px' }

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleClick = (role: Role) => {
    dispatch(setUserRole(role))
    navigate('/dashboard')
  }

  return (
    <Box sx={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <Card
        variant="outlined"
        sx={{
          padding: '40px',
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          borderRadius: '8px',
        }}
      >
        <Button
          variant="outlined"
          size="large"
          startIcon={<AdminPanelSettingsSharp />}
          sx={buttonStyle}
          onClick={() => handleClick(Role.Admin)}
        >
          Login as Admin
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<RateReviewOutlined />}
          sx={buttonStyle}
          onClick={() => handleClick(Role.Reviewer)}
        >
          Login as Reviewer
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<People />}
          sx={buttonStyle}
          onClick={() => handleClick(Role.Member)}
        >
          Login as Member
        </Button>
      </Card>
    </Box>
  )
}

export default Login
