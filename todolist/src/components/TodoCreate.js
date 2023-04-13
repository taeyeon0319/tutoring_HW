import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { RiHeartAddFill } from 'react-icons/ri';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';
 
const CircleButton = styled.button`
  background: #acb7ff;
  &:hover {
    background: #9953e2;
  }

  cursor: pointer;
  width: 80px;
  height: 80px;
  
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 80px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
 
  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
        display:none;
    `}
`;
 
const InsertFormPositioner = styled.div`
  width: 500px;
  height:100px;
  position: absolute;
`;
 
const InsertForm = styled.form`
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
`;
 
const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;
 
function TodoCreate() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();
  
    const onToggle = () => setOpen(!open);
    const onChange = e => setValue(e.target.value);
    const onSubmit = e => {
      e.preventDefault();
      dispatch({
        type: 'CREATE',
        todo: {
          id: nextId.current,
          text: value,
          done: false
        }
      });
      nextId.current += 1;
      setOpen(false);
      setValue('');
    };
  
    return (
      <>
        {open && (
          <InsertFormPositioner>
            <InsertForm onSubmit={onSubmit}>
              <Input
                autoFocus
                onChange={onChange}
                value={value}
                placeholder="할 일을 입력 후, Enter 를 누르세요"
              />
            </InsertForm>
          </InsertFormPositioner>
        )}
        <CircleButton onClick={onToggle} open={open}>
        <RiHeartAddFill />
        </CircleButton>
      </>
    );
}
 
export default React.memo(TodoCreate);