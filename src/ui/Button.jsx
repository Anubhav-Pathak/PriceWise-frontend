import React from "react";
import styled from "styled-components"

// More about Styled components in - https://styled-components.com/

const styledButton = styled.button`

`;

const Button = (props) => {
    <styledButton>{props.text}</styledButton>
}

export default Button;