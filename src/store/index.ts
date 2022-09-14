import { applyMiddleware, createStore, compose } from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import combinedReducers from './reducers'

const store = createStore(combinedReducers, compose(applyMiddleware(thunkMiddleware)))
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store
