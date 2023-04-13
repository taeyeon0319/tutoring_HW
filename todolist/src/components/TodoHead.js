import React from "react";
import styled from "styled-components";

const TodoHeadStyle = styled.div`
    padding-top: 20px;
    padding-left:20px;
    h1{
        font-size:30px;
        margin-bottom:0px;
    }
    p{
        margin-top:4px;
        font-size:16px;
        color: #9953e2;
        font-weight:bolder;
    }
`;

function TodoHead(){    
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate()
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    let dayOfWeek = week[now.getDay()];

    return(
        <TodoHeadStyle>
            <h1> {todayYear}년 {todayMonth}월 {todayDate}일</h1>
            <p>{dayOfWeek}요일</p>
        </TodoHeadStyle>
    )
}

export default TodoHead;