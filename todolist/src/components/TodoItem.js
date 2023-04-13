import React from 'react';
import styled, { css } from 'styled-components';
import { AiFillHeart, AiFillDelete } from 'react-icons/ai';
import { useTodoDispatch } from '../TodoContext';

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #9953e2;
    }
    display: none;
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${Remove} {
            display: initial;
        }
    }
`;

//원
const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 2px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    border-color:#9953e2;
    ${props =>
        props.done &&
        css`
            border: 2px solid #9953e2;
            color: #9953e2;
        `}
`;

//check된 상태의 글씨
const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props =>
        props.done &&
        css`
            color: #9953e2;
            text-decoration:line-through;
        `}
`;


function TodoItem({ id, done, text }) {
    const dispatch = useTodoDispatch();

    const onToggle = () => {
        dispatch({
            type: 'TOGGLE',
            id
        });
    };

    const onRemove = () => {
        dispatch({
            type: 'REMOVE',
            id
        });
    };

    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}>
                {done && <AiFillHeart />}
            </CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove onClick={onRemove}>
                <AiFillDelete />
            </Remove>
        </TodoItemBlock>
    );
}

export default React.memo(TodoItem);