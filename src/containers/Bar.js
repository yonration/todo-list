import { connect } from 'react-redux'
import Bar from '../components/Bar'
function mapState(state, {match: {params: { filter}}}) {
  return {
    filter,
    count: state.todos.data.filter(todo => !todo.done).length
  }
}
export default connect(mapState)(Bar)