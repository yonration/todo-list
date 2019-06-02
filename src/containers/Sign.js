import { connect } from 'react-redux'
import { signup, signin } from '../actions/sign'
import Sign from '../components/Sign'
function mapState(state) {
  return {
    isLoading: state.sign.isLoading,
    status: state.sign.status
  }
}
function mapDispatch(dispatch) {
  return {
    handleSignup: form => dispatch(signup(form)),
    handleSignin: form => dispatch(signin(form))
  }
}
export default connect(mapState, mapDispatch)(Sign)