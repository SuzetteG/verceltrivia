import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CharactersPage from '../src/CharactersPages';

// Mock useCharacters hook
jest.mock('../src/hooks/useCharacters', () => ({
  useCharacters: () => ({
    loading: false,
    error: null,
    data: {
      characters: {
        results: [
          { id: 1, name: 'Rick', image: 'rick.png' },
          { id: 2, name: 'Morty', image: 'morty.png' },
        ],
      },
    },
  }),
}));

describe('CharactersPage Integration', () => {
  it('renders characters and allows navigation', () => {
    render(
      <MemoryRouter>
        <CharactersPage />
      </MemoryRouter>
    );
    expect(screen.getByText(/Characters page/i)).toBeInTheDocument();
    expect(screen.getByText('Rick')).toBeInTheDocument();
    expect(screen.getByText('Morty')).toBeInTheDocument();
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });
});
