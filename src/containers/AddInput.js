import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'
import AddInput from '../components/AddInput'
function mapDispatch(dispatch) {
  return {
    handleEnter: (text, degree) => {
      dispatch(addTodo({ text, degree }))
    }
  }
}
export default connect(null, mapDispatch)(AddInput)