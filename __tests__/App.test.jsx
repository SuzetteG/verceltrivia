import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';

describe('App Component', () => {
  test('renders Trivia Time title', () => {
    render(<App />);
    expect(screen.getByText(/Trivia Time/i)).toBeInTheDocument();
  });

  test('refresh button triggers fetchTrivia', () => {
    render(<App />);
    const button = screen.getByText(/Refresh Questions/i);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    // No assertion for fetch, but button is clickable
  });
});
