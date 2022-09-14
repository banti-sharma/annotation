import { getUser } from '../../services/api'
import Action from '../../store/actionTypes'
import { Role } from '../../types'

export const setUserRole = (role: Role) => async (dispatch: any) => {
  const user = await getUser(role)
  dispatch({ type: Action.SET_USER, payload: user })
}

export const logout = () => (dispatch: any) => {
  dispatch({ type: Action.LOGOUT, payload: null })
}
