import { DataPoint, IAction } from '../../types'
import Action from '../actionTypes'

interface IState {
  data: DataPoint[]
}
const defaultState: IState = {
  data: [],
}

const reducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case Action.SET_DATA:
      return {
        ...state,
        data: action.payload as DataPoint[],
      }
    default:
      return state
  }
}

export default reducer
