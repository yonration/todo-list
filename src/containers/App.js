import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import { receiveTodos, removeTodos } from '../actions/todos'
import { signout } from '../actions/sign'
import { removeUser } from '../actions/user'
import AddInput from '../containers/AddInput'
import Fetching from '../containers/Fetching'
import TodoList from '../containers/TodoList'
import Bar from '../containers/Bar'
import Sign from '../containers/Sign'
function App({ user, isFetching, didMount, handleClick }) {
  useEffect(() => {
    if(user) {
      didMount()
    }
  }, [user, didMount])
  return (
    <>
      <Sign show={user ? false : true} />
      <Container className="py-3">
        <Row className="pb-2">
          <Col md={2}>
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary">
                你好，{user && user.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={handleClick}>登出</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <AddInput />
          </Col>
        </Row>
        <Fetching>
          {isFetching ? '正在获取数据 ······' : '成功！'}
        </Fetching>
        <Row className="pb-2">
          <Col>
            <Route path="/:filter?" component={TodoList} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <Route path="/:filter?" component={Bar} />
          </Col>
        </Row>
      </Container>
    </>
  )
}
function mapState(state) {
  return {
    user: state.user,
    isFetching: state.todos.isFetching
  }
}
function mapDispatch(dispatch) {
  return {
    didMount: () => dispatch(receiveTodos()),
    handleClick: () => {
      dispatch(signout())
      dispatch(removeUser())
      dispatch(removeTodos())
    }
  }
}
export default connect(mapState, mapDispatch)(App)