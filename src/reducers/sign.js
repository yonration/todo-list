import produce from 'immer'
import { SIGN_REQUEST, SIGN_SUCCESS, SIGN_FAILURE, SIGN_OUT } from '../actions/sign'
export default produce((draft, action) => {
  switch(action.type) {
    case SIGN_REQUEST:
      draft.isLoading = true
      draft.status = 0
      break
    case SIGN_SUCCESS:
      draft.isLoading = false
      draft.status = 1
      break
    case SIGN_FAILURE:
      draft.isLoading = false
      draft.status = -1
      break
    case SIGN_OUT:
        draft.status = 0
        break
    default:
      return draft
  }
}, {
  isLoading: false,
  status: 0
})