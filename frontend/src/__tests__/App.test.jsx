import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Connect To Ong')).toBeInTheDocument();
  });

  test('renders navigation', () => {
    render(<App />);
    expect(screen.getByText('Início')).toBeInTheDocument();
  });

  test('renders login link', () => {
    render(<App />);
    expect(screen.getByText('Acessar Conta')).toBeInTheDocument();
  });
});
