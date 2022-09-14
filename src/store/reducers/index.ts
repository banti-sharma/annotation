import { combineReducers } from 'redux'
import auth from './auth'
import dataPoints from './dataPoints'

function lastAction(state = null, action: any) {
  return action
}

export default combineReducers({
  auth,
  dataPoints,
  lastAction,
})
