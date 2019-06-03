import { connect } from 'react-redux'
import Tips from '../components/Tips'
function mapState(state) {
  return {
    isShow: state.sign.isLoading,
    status: state.sign.status
  }
}
export default connect(mapState)(Tips)