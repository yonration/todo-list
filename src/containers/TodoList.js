import { connect } from 'react-redux'
import { updateTodo, deleteTodo } from '../actions/todos'
import TodoList from '../components/TodoList'
function mapState(state, {match: { params }}) {
  if(params.filter && params.filter !== 'active' && params.filter !== 'completed') {
    return window.location.href = 'https://www.baidu.com'
  }
  return {
    isFetching: state.todos.isFetching,
    todos: state.todos.data.filter(todo => (
      params.filter === undefined ?
      true :
      params.filter === 'active' ?
      !todo.done :
      todo.done
    ))
  }
}
function mapDispatch(dispatch) {
  return {
    handleUpdate: form => dispatch(updateTodo(form)),
    handleDelete: id => dispatch(deleteTodo(id))
  }
}
export default connect(mapState, mapDispatch)(TodoList)