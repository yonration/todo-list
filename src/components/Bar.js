import React from 'react'
import { Navbar, Nav, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default ({ filter, count }) => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Text>
        待办事项：
        <Badge variant="info">{count}</Badge>
        {' '}\^o^/
      </Navbar.Text>
      <Nav className="ml-auto">
        <Nav.Link as="span">
          <Link
            to="/"
            style={{color: !filter ? '#003166' : ''}}
          >
            全部
          </Link>
        </Nav.Link>
        <Nav.Link as="span">
          <Link
            to="/active"
            style={{color: filter === 'active' ? '#003166' : ''}}
          >
            未完成
          </Link>
        </Nav.Link>
        <Nav.Link as="span">
          <Link
            to="/completed"
            style={{color: filter === 'completed' ? '#003166' : ''}}
          >
            已完成
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}