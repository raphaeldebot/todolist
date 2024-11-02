// src/components/FilterButtons.js

import React from 'react';
import styled from 'styled-components';

// Styles pour le groupe de boutons de filtre
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const FilterButton = styled.button`
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.accent : 'transparent'};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.buttonText : theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.small}
    ${({ theme }) => theme.spacing.medium};
  margin: 0 ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.buttonText};
  }
`;

const FilterButtons = ({ filter, setFilter }) => {
  return (
    <ButtonGroup>
      <FilterButton
        isActive={filter === 'all'}
        onClick={() => setFilter('all')}
      >
        Toutes
      </FilterButton>
      <FilterButton
        isActive={filter === 'active'}
        onClick={() => setFilter('active')}
      >
        Actives
      </FilterButton>
      <FilterButton
        isActive={filter === 'completed'}
        onClick={() => setFilter('completed')}
      >
        Terminées
      </FilterButton>
    </ButtonGroup>
  );
};

export default FilterButtons;
