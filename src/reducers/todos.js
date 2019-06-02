import produce from 'immer'
import { REQUEST_START, ADD_TODO, DELETE_TODO ,UPDATE_TODO, RECEIVE_TODOS, REMOVE_TODOS } from '../actions/todos'
export default produce((draft, action) => {
  switch(action.type) {
    case REQUEST_START:
      draft.isFetching = true
      break
    case RECEIVE_TODOS:
      draft.isFetching = false
      draft.data = action.data
      break
    case ADD_TODO:
      draft.isFetching = false
      draft.data.push(action.data)
      draft.data.sort((a, b) => {
        if(a.degree > b.degree) {
          return -1
        } else if(a.degree === b.degree) {
          return a.time - b.time
        } else {
          return 1
        }
      })
      break
    case REMOVE_TODOS:
      draft.data = []
    default:
      return draft
  }
}, {
  isFetching: false,
  data: []
})