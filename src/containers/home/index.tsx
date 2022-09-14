import './index.css'
import { useEffect } from 'react'
import { Role } from '../../types'
import { useAppSelector } from '../../store'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const userRole = useAppSelector((x) => x.auth?.user?.role)
  const navigate = useNavigate()

  useEffect(() => {
    if (userRole === Role.Admin) {
      navigate('/dataset')
    } else if (userRole === Role.Reviewer) {
      navigate('/users')
    } else {
      navigate('/data-points')
    }
  }, [userRole, navigate])

  return <></>
}

export default Home
