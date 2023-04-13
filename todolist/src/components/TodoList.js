import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from '../TodoContext';

const TodoListStyle = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-x: auto;
`;


function TodoList() {
    const todos = useTodoState();
    return (
      <TodoListStyle>
        {todos.map(todo => (
          <TodoItem
            id={todo.id}
            text={todo.text}
            done={todo.done}
            key={todo.id}
          />
        ))}
      </TodoListStyle>
    );
  }

export default TodoList;