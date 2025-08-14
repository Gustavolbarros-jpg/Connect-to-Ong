import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from '../../../Pags/Auth/LoginPage';

describe('LoginPage Component', () => {
  test('renders login form', () => {
    render(<LoginPage />);
    expect(screen.getByText('Entrar')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite seu e-mail...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite sua Senha...')).toBeInTheDocument();
  });

  test('renders login button', () => {
    render(<LoginPage />);
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument();
  });

  test('renders forgot password link', () => {
    render(<LoginPage />);
    expect(screen.getByText('Esqueci a senha')).toBeInTheDocument();
  });

  test('renders register link', () => {
    render(<LoginPage />);
    expect(screen.getByText('Não tem uma conta?')).toBeInTheDocument();
    expect(screen.getByText('Cadastre-se')).toBeInTheDocument();
  });
});
