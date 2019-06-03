import React, { useState } from 'react'
import { ListGroup, Row, Col, Form, Button, FormControl } from 'react-bootstrap'
import HoverRadios from './HoverRadios'
export default ({ isFetching, todos, handleUpdate, handleDelete }) => {
  let [text, setText] = useState('')
  let [editIdx, setEditIdx] = useState(-1)
  let handleChange = (id, value) => {
    handleUpdate({
      id,
      degree: value
    })
  }
  let handleKeyPress = (id, e) => {
    if(e.key === 'Enter'){
      e.target.blur()
      if(text.trim() !== '') {
        handleUpdate({
          id,
          text: text.trim()
        })
        setText('')
      }
    }
  }
  let handleCheck = (id, done) => {
    handleUpdate({ id, done })
  }
  return (
    <ListGroup>
      {todos.map(todo => (
        <ListGroup.Item key={todo.id} disabled={isFetching}>
          <Row>
            <Col md={1} style={{textAlign: 'center'}}>
              <Form.Check
                custom
                type="checkbox"
                id={todo.id}
                label=""
                checked={todo.done}
                onChange={() => handleCheck(todo.id, !todo.done)}
              />
            </Col>
            <Col md={1} style={{textAlign: 'center'}}>
              <HoverRadios name={todo.id} value={todo.degree} onChange={value => handleChange(todo.id, value)}>
                <input value={1} color="secondary" text="!">普通</input>
                <input value={2} color="primary" text="!!">精良</input>
                <input value={3} color="danger" text="!!!">史诗</input>
              </HoverRadios>
            </Col>
            <Col onDoubleClick={() => {setEditIdx(todo.id);setText(todo.text)}}>
              {
                editIdx === todo.id ?
                <FormControl
                  autoFocus
                  type="text"
                  size="sm"
                  value={text}
                  onChange={e => setText(e.target.value)}
                  onKeyPress={e => handleKeyPress(todo.id, e)}
                  onBlur={() => {setEditIdx(-1);setText('')}}
                /> :
                <span
                  style={{
                    textDecoration: todo.done ? 'line-through' : 'none',
                    color: todo.done ? '#909090' : ''
                  }}
                >
                  {todo.text}
                </span>
              }
            </Col>
            <Col md={1} style={{textAlign: 'center'}}>
              <Button
                onClick={() => handleDelete(todo.id)}
                variant="outline-dark"
                size="sm"
                style={{
                  border: 'none',
                  margin: '1px'
                }}
              >
                ✕
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}