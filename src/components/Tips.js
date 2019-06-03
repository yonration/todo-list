import React, { useState, useEffect } from 'react'
import { Row, Col, Collapse, Alert } from 'react-bootstrap'
export default ({ isShow, status, children }) => {
  let [flag, setFlag] = useState(isShow)
  useEffect(() => {
    if(isShow) {
      setFlag(isShow)
    } else {
      if(status < 0) {
        setTimeout(() => setFlag(isShow), 5000)
      } else {
        setFlag(isShow)
      }
    }
  }, [isShow, status])
  return (
    <Collapse in={flag}>
      <Row>
        <Col>
          <Alert
            variant={
              status === 0 ?
              'warning' :
              status > 0 ?
              'success' :
              'danger'
            }
            style={{textAlign: 'center', margin: 0}}
          >
            {children}
          </Alert>
        </Col>
      </Row>
    </Collapse>
  )
}