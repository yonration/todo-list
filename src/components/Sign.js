import React, { useState } from 'react'
import { Modal, Button, Form, Col, Tabs, Tab } from 'react-bootstrap'
export default ({ show, isLoading, status, handleSignup, handleSignin }) => {
  let [name, setName] = useState('')
  let [signinAccount, setSigninAccount] = useState('')
  let [signinPassword, setSigninPassword] = useState('')
  let [signupAccount, setSignupAccount] = useState('')
  let [signupPassword, setSignupPassword] = useState('')
  let signinSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    let form = e.currentTarget
    if (form.checkValidity()) {
      handleSignin({
        account: signinAccount,
        password: signinPassword
      })
    }
  }
  let signupSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    let form = e.currentTarget
    if (form.checkValidity()) {
      handleSignup({
        name,
        account: signinAccount,
        password: signinPassword
      })
    }
  }
  return (
    <Modal show={show}>
      <Modal.Body className="px-5 py-4">
        <Tabs defaultActiveKey="signin" className="nav-pills nav-fill">
          <Tab eventKey="signin" title="登录">
            <Form onSubmit={e => signinSubmit(e)} className="pt-4">
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>账号</Form.Label>
                  <Form.Control
                    type="text"
                    value={signinAccount}
                    onChange={e => setSigninAccount(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>密码</Form.Label>
                  <Form.Control
                    type="password"
                    value={signinPassword}
                    onChange={e => setSigninPassword(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row className="justify-content-end pt-2">
                <Button variant="primary" type="submit">
                  登录
                </Button>
              </Form.Row>
            </Form>
          </Tab>
          <Tab eventKey="signup" title="注册">
            <Form onSubmit={e => signupSubmit(e)} className="pt-4">
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>昵称</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>账号</Form.Label>
                  <Form.Control
                    type="text"
                    value={signupAccount}
                    onChange={e => setSignupAccount(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>密码</Form.Label>
                  <Form.Control
                    type="password"
                    value={signupPassword}
                    onChange={e => setSignupPassword(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row className="justify-content-end pt-2">
                <Button variant="primary" type="submit">
                  注册
                </Button>
              </Form.Row>
            </Form>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  )
}