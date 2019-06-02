import React from 'react'
import { ListGroup, Row, Col, Form } from 'react-bootstrap'
import HoverRadios from './HoverRadios'
export default ({ todos, handleChange }) => (
  <ListGroup>
    {todos.map(todo => (
      <ListGroup.Item key={todo.id}>
        <Row>
          <Col md={1} style={{textAlign: 'center'}}>
            <Form.Check
              custom
              type="checkbox"
              id={todo.id}
              label=""
            />
          </Col>
          <Col>
            {todo.text}
          </Col>
          <Col md={1} style={{textAlign: 'center'}}>
            <HoverRadios name={todo.id} value={todo.degree} onChange={handleChange}>
              <input value={1} color="secondary" text="!">普通</input>
              <input value={2} color="primary" text="!!">精良</input>
              <input value={3} color="danger" text="!!!">史诗</input>
            </HoverRadios>
          </Col>
        </Row>
      </ListGroup.Item>
    ))}
  </ListGroup>
)