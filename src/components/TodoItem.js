// src/components/TodoItem.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faCheckCircle,
  faCircle,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';

// Styles pour l'élément de tâche
const Item = styled.div`
  background-color: #fff;
  padding: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.span`
  flex: 1;
  margin-right: ${({ theme }) => theme.spacing.medium};
  text-decoration: ${props => (props.isCompleted ? 'line-through' : 'none')};
  color: ${props => (props.isCompleted ? '#aaa' : 'inherit')};
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Priority = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
`;

const DueDate = styled.span`
  font-size: 0.8rem;
  color: ${({ isOverdue }) => (isOverdue ? 'red' : 'inherit')};
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const IconButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.accent};
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  margin-left: ${({ theme }) => theme.spacing.small};

  &:hover {
    color: ${({ theme }) => theme.colors.border};
  }
`;

const InputEdit = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  outline: none;
`;

const TodoItem = ({ todo, removeTodo, toggleComplete, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const isOverdue =
    todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.isCompleted;

  const handleEdit = e => {
    e.preventDefault();
    if (newText.trim()) {
      editTodo(todo.id, newText.trim());
      setIsEditing(false);
    }
  };

  return (
    <Item>
      {isEditing ? (
        <form onSubmit={handleEdit} style={{ display: 'flex', flex: 1 }}>
          <InputEdit
            type="text"
            value={newText}
            onChange={e => setNewText(e.target.value)}
          />
          <IconButton type="submit" aria-label="Enregistrer">
            <FontAwesomeIcon icon={faCheckCircle} />
          </IconButton>
        </form>
      ) : (
        <>
          <Details>
            <Text isCompleted={todo.isCompleted}>{todo.text}</Text>
            {todo.dueDate && (
              <DueDate isOverdue={isOverdue}>
                Échéance : {new Date(todo.dueDate).toLocaleDateString()}
              </DueDate>
            )}
          </Details>
          <ButtonGroup>
            <IconButton
              onClick={() => toggleComplete(todo.id)}
              aria-label={
                todo.isCompleted ? 'Marquer comme non terminé' : 'Marquer comme terminé'
              }
            >
              <FontAwesomeIcon icon={todo.isCompleted ? faCheckCircle : faCircle} />
            </IconButton>
            <IconButton
              onClick={() => setIsEditing(true)}
              aria-label="Modifier la tâche"
            >
              <FontAwesomeIcon icon={faEdit} />
            </IconButton>
            <IconButton
              onClick={() => removeTodo(todo.id)}
              aria-label="Supprimer la tâche"
            >
              <FontAwesomeIcon icon={faTrash} />
            </IconButton>
          </ButtonGroup>
        </>
      )}
    </Item>
  );
};

export default TodoItem;
