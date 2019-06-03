import produce from 'immer'
import { REQUEST_START, ADD_TODO, DELETE_TODO ,UPDATE_TODO, RECEIVE_TODOS, REMOVE_TODOS } from '../actions/todos'
export default produce((draft, action) => {
  let idx
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
      break
    case DELETE_TODO:
      draft.isFetching = false
      idx = draft.data.findIndex(todo => todo.id === action.id)
      draft.data.splice(idx, 1)
      break
    case UPDATE_TODO:
      draft.isFetching = false
      idx = draft.data.findIndex(todo => todo.id === action.data.id)
      draft.data.splice(idx, 1)
      // 二分法查找位置
      if(action.data.degree) {
        let lft = 0
        let rit = draft.data.length
        while(lft < rit) {
          let mid = lft + rit >> 1
          if(draft.data[mid].degree > action.data.degree) {
            lft = mid + 1
          } else if(draft.data[mid].degree < action.data.degree) {
            rit = mid
          } else {
            if(draft.data[mid].time < action.data.time) {
              lft = mid + 1
            } else if(draft.data[mid].time > action.data.time) {
              rit = mid
            }
          }
        }
        idx = lft
      }
      draft.data.splice(idx, 0, action.data)
      break      
    default:
      return draft
  }
}, {
  isFetching: false,
  data: []
})