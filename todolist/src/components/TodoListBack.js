import React from "react";
import styled from "styled-components";

const TodoListBackStyle = styled.div`
    background:white;
    width: 470px;
    height: 470px;

    margin:0 auto;
    border-radius:16px;
`;

function TodoListBack({children}){    
    return(
        <TodoListBackStyle>{children}</TodoListBackStyle>
    )
}

export default TodoListBack;