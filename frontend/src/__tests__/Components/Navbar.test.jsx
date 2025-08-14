import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../../Components/Navbar';

describe('Navbar Component', () => {
  beforeEach(() => {
    // Limpar localStorage antes de cada teste
    localStorage.clear();
  });

  test('renders navbar with logo', () => {
    render(<Navbar />);
    expect(screen.getByText('Connect To Ong')).toBeInTheDocument();
  });

  test('renders navigation menu items', () => {
    render(<Navbar />);
    expect(screen.getByText('Início')).toBeInTheDocument();
    expect(screen.getByText('Universidade')).toBeInTheDocument();
  });

  test('renders login and register links when not authenticated', () => {
    render(<Navbar />);
    expect(screen.getByText('Acessar Conta')).toBeInTheDocument();
    expect(screen.getByText('Cadastre-se')).toBeInTheDocument();
  });
});
