import React, { useState } from 'react'
import { ToggleButtonGroup, ToggleButton, InputGroup, FormControl } from 'react-bootstrap'
export default ({ handleEnter }) => {
  let [text, setText] = useState('')
  let [degree, setDegree] = useState(1)
  let handleKeyPress = e => {
    if(e.key === 'Enter'){
      e.target.blur()
      if(text.trim() !== '') {
        handleEnter(text.trim(), degree)
        setText('')
        setDegree(1)
      }
    }
  }
  return (
    <InputGroup>
      <InputGroup.Prepend>
        <ToggleButtonGroup
          type="radio"
          name="AddInput"
          value={degree}
          onChange={value => setDegree(value)}
        >
          <ToggleButton variant='outline-secondary' value={1}>
            普通
          </ToggleButton>
          <ToggleButton variant='outline-primary' value={2}>
            精良
          </ToggleButton>
          <ToggleButton variant='outline-danger' value={3}>
            史诗
          </ToggleButton>
        </ToggleButtonGroup>
      </InputGroup.Prepend>
      <FormControl
        type="text"
        placeholder="输入内容，回车走起"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </InputGroup>
  )
}