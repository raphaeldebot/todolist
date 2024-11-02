// src/components/TodoForm.js

import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const Input = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.small};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius} 0 0 ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  outline: none;
`;

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  border-radius: 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius} 0;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!input.trim()) return;

    addTodo(input.trim());
    setInput('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Ajouter une tâche..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <Button type="submit">Ajouter</Button>
    </Form>
  );
};

export default TodoForm;
