import React from "react";
import styled from "styled-components"

const TodoTemplateStyle = styled.div `
    width: 500px;
    height: 700px;
    border-radius:16px;

    background:#d5d5f6;
    box-shadow: 10px 5px 5px #acb7ff;
    
    margin:20px auto;
    
`;

function TodoTemplate({ children }){
    return <TodoTemplateStyle>{children}</TodoTemplateStyle>
}

export default TodoTemplate;