import produce from 'immer'
import { PUT_USER, REMOVE_USER } from '../actions/user'
export default produce((draft, action) => {
  switch(action.type) {
    case PUT_USER:
      return action.user
    case REMOVE_USER:
      return null
    default:
      return draft
  }
}, null)