import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers/index'

export default createStore(reducer, applyMiddleware(thunkMiddleware))