import React from 'react'
import { Row, Col, Collapse, Alert } from 'react-bootstrap'
export default ({ fetching }) => (
  <Collapse in={fetching}>
    <Row>
      <Col>
        <Alert
          variant="warning"
          style={{textAlign: 'center', margin: 0}}
        >
          正在获取数据 ··· ···
        </Alert>
      </Col>
    </Row>
  </Collapse>
)