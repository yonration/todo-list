import axios from 'axios'
import { getId, getTime } from '../utility'
export const REQUEST_START = 'REQUEST_START'
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'
export const REMOVE_TODOS = 'REMOVE_TODOS'

export let addTodo = form => async (dispatch, getState) => {
  dispatch({type: REQUEST_START})
  let res = await axios.post('/todos', {
    ...form,
    id: getId('todo'),
    time: getTime(),
    userId: getState().user.id
  })
  dispatch({
    type: ADD_TODO,
    data: res.data
  })
}
export let deleteTodo = id => async dispatch => {
  dispatch({type: REQUEST_START})
  let res = await axios.delete(`/todos/${id}`)
  dispatch({
    type: DELETE_TODO,
    id
  })
}
export let updateTodo = form => async dispatch => {
  dispatch({type: REQUEST_START})
  let res = await axios.patch(`/todos/${form.id}`, form)
  dispatch({
    type: UPDATE_TODO,
    data: res.data
  })
}
export let receiveTodos = () => async (dispatch, getState) => {
  dispatch({type: REQUEST_START})
  let res = await axios.get(`/todos?userId=${getState().user.id}&_sort=degree,time&_order=desc,asc`)
  dispatch({
    type: RECEIVE_TODOS,
    data: res.data
  })
}
export let removeTodos = () => ({
  type: REMOVE_TODOS
})