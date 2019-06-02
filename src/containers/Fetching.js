import { connect } from 'react-redux'
import Fetching from '../components/Fetching'
function mapState(state) {
  return {
    fetching: state.todos.isFetching
  }
}
export default connect(mapState)(Fetching)