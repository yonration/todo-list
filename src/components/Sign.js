import React, { useState, useEffect } from 'react'
import { Modal, Button, Form, Col, Tabs, Tab } from 'react-bootstrap'
import Signing from '../containers/Signing'
export default ({ show, isLoading, status, handleSignup, handleSignin }) => {
  let [name, setName] = useState('')
  let [signinAccount, setSigninAccount] = useState('')
  let [signinPassword, setSigninPassword] = useState('')
  let [signupAccount, setSignupAccount] = useState('')
  let [signupPassword, setSignupPassword] = useState('')
  useEffect(() => {
    if(status > 0) {
      setName('')
      setSigninAccount('')
      setSigninPassword('')
      setSignupAccount('')
      setSignupPassword('')
    } else if(status < 0) {
      setSigninPassword('')
      setSignupPassword('')
    }
  }, [status])
  let signinSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    handleSignin({
      account: signinAccount,
      password: signinPassword
    })
  }
  let signupSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    handleSignup({
      name,
      account: signupAccount,
      password: signupPassword
    })
  }
  return (
    <Modal show={show} onHide={() => {}}>
      <Modal.Body className="px-5 py-4">
        <Signing>
          {
            status === 0 ?
            '请求已发送 ······' :
            status > 0 ?
            '登陆成功！' :
            '填写错误，请核对！'
          }
        </Signing>
        <Tabs disabled defaultActiveKey="signin" className="mt-2 nav-pills nav-fill">
          <Tab eventKey="signin" title="登录">
            <Form onSubmit={e => signinSubmit(e)} className="pt-4">
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>账号</Form.Label>
                  <Form.Control 
                    type="text"
                    disabled = {isLoading}
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
                    disabled = {isLoading}
                    value={signinPassword}
                    onChange={e => setSigninPassword(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row className="justify-content-end pt-2">
                <Button disabled = {isLoading} variant="primary" type="submit">
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
                    disabled = {isLoading}
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
                    disabled = {isLoading}
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
                    disabled = {isLoading}
                    value={signupPassword}
                    onChange={e => setSignupPassword(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row className="justify-content-end pt-2">
                <Button disabled = {isLoading} variant="primary" type="submit">
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