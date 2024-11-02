// src/components/TodoList.js

import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const TodoList = ({ todos, removeTodo, toggleComplete, editTodo }) => {
  return (
    <List>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </List>
  );
};

export default TodoList;
