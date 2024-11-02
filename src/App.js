// src/App.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import PetalsBackground from './components/PetalsBackground'; // Importer le nouveau composant

import { v4 as uuidv4 } from 'uuid';

// Conteneur principal de l'application
const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem; /* Ajustez selon vos besoins */
  position: relative;
  z-index: 1; /* Assure que le contenu est devant le background */
  background-color: rgba(255, 255, 255, 0.8); /* Optionnel : ajouter un fond semi-transparent */
  border-radius: 8px; /* Optionnel : arrondir les coins */
`;

function App() {
  // État pour la liste des tâches
  const [todos, setTodos] = useState(() => {
    // Récupérer les tâches depuis localStorage au chargement initial
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // État pour le filtre actif (toutes, actives, terminées)
  const [filter, setFilter] = useState('all');

  // Effet pour sauvegarder les tâches dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Fonction pour ajouter une nouvelle tâche
  const addTodo = (text, priority, dueDate) => {
    const newTodo = {
      id: uuidv4(),
      text,
      isCompleted: false,
      priority,
      dueDate,
    };
    setTodos([...todos, newTodo]);
  };

  // Fonction pour supprimer une tâche
  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Fonction pour marquer une tâche comme terminée ou non
  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  // Fonction pour modifier le texte d'une tâche
  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  // Filtrer les tâches en fonction du filtre actif
  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.isCompleted;
    if (filter === 'completed') return todo.isCompleted;
    return true;
  });

  return (
    <>
      <GlobalStyle />
      <PetalsBackground /> {/* Ajouter l'animation en arrière-plan */}
      <AppContainer>
        <h1>Ma Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <FilterButtons filter={filter} setFilter={setFilter} />
        <TodoList
          todos={filteredTodos}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      </AppContainer>
    </>
  );
}

export default App;
