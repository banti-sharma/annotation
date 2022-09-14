import { IAction, User } from '../../types'
import Action from '../actionTypes'

const userString = localStorage.getItem('user')
const user = userString ? JSON.parse(userString) : null
interface IState {
  user: User | null
  isAuthenticated: boolean
}
const defaultState: IState = {
  user: user,
  isAuthenticated: !!user,
}

const reducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case Action.SET_USER:
      localStorage.setItem('user', JSON.stringify(action.payload))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload as User,
      }

    case Action.LOGOUT:
      localStorage.removeItem('user')
      return {
        ...defaultState,
        isAuthenticated: false,
        user: null,
      }
    default:
      return state
  }
}

export default reducer
