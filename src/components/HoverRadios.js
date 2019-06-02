import React, { useState, useEffect, Children } from 'react'
import { Badge, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
export default ({ name, value, onChange, children }) => {
  let [hover, setHover] = useState(false)
  let [textMap, setTextMap] = useState({})
  let [colorMap, setColorMap] = useState({})
  useEffect(() => {
    let childArr = Children.toArray(children)
    let temp = {
      text: {},
      color: {}
    }
    childArr.forEach(child => {
      let { value, text, color } = child.props
      temp['text'][value] = text
      temp['color'][value] = color
    })
    setTextMap(temp['text'])
    setColorMap(temp['color'])
  }, [children])
  return (
    <Badge
      variant={colorMap[value]}
      style={{
        position: 'relative',
        cursor: "pointer"
      }}
      onMouseEnter={() => hover || setHover(true)}
      onMouseLeave={() => hover && setHover(false)}
    >
      {textMap[value]}
      <ToggleButtonGroup
        size="sm"
        type="radio"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#ffffff',
          zIndex: 1000,
          visibility: `${hover ? 'visible' : 'hidden'}`
        }}
        name={name}
        value={value}
        onChange={value => {
          setHover(false)
          onChange(value)
        }}
      >
        {Children.map(children, (child, index) => {
          let { color, value, children } = child.props
          return (
            <ToggleButton
              key={index}
              variant={`outline-${color}`}
              value={value}
            >
              {children}
            </ToggleButton>
          )
        })}
      </ToggleButtonGroup>
    </Badge>
  )
}