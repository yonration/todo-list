import { combineReducers } from 'redux'
import user from './user'
import sign from './sign'
import todos from './todos'

export default combineReducers({ user, sign, todos })