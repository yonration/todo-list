import { connect } from 'react-redux'
import { updateTodo } from '../actions/todos'
import TodoList from '../components/TodoList'
function mapState(state) {
  return {
    todos: state.todos.data
  }
}
function mapDispatch(dispatch) {
  return {
    handleChange: () => dispatch(updateTodo())
  }
}
export default connect(mapState, mapDispatch)(TodoList)