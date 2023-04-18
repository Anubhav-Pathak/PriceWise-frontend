import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.div`
    color: black;
    margin: 10px;
    & label {
      font-weight: bold;
      display: block;
      margin-bottom: 5px;
    }
    & input {
      background: none;
      outline: none;
      border-radius: 3px;
      border: 2px solid #9333ea;
      padding: 5px;
      width: 250px;
    }
`;

const Input = React.forwardRef((props, ref) => {
  return (
    <StyledInput>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input}/>
    </StyledInput>
  )
});

export default Input