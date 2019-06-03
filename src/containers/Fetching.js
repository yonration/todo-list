import { connect } from 'react-redux'
import Tips from '../components/Tips'
function mapState(state) {
  return {
    isShow: state.todos.isFetching,
    status: state.todos.isFetching ? 0 : 1
  }
}
export default connect(mapState)(Tips)