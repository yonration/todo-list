import axios from 'axios'
import { putUser } from './user'
import { getId } from '../utility'
export const SIGN_REQUEST = 'SIGN_REQUEST'
export const SIGN_SUCCESS = 'SIGN_SUCCESS'
export const SIGN_FAILURE = 'SIGN_FAILURE'
export const SIGN_OUT = 'SIGN_OUT'
let signRequest = () => ({
  type: SIGN_REQUEST
})
let signSuccess = () => ({
  type: SIGN_SUCCESS
})
let signFailure = () => ({
  type: SIGN_FAILURE
})
export let signup = form => async dispatch => {
  dispatch(signRequest())
  let res = await axios.post(`/users`, {
    ...form,
    id: getId('user')
  })
  dispatch(signSuccess())
  dispatch(putUser(res.data))
}
export let signin = form => async dispatch => {
  dispatch(signRequest())
  let res = await axios.get(`/users?account=${form.account}&password=${form.password}`)
  if(res.data.length === 0) {
    dispatch(signFailure())
  } else {
    dispatch(signSuccess())
    dispatch(putUser(res.data[0]))
  }
}
export let signout = () => ({
  type: SIGN_OUT
})