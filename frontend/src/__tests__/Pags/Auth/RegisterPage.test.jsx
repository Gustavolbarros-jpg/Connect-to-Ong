import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RegisterPage from '../../../Pags/Auth/RegisterPage';

describe('RegisterPage Component', () => {
  test('renders register form', () => {
    render(<RegisterPage />);
    expect(screen.getByText('Cadastre-se')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite seu nome completo...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite seu e-mail...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite sua senha...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirme a sua senha...')).toBeInTheDocument();
  });

  test('renders register button', () => {
    render(<RegisterPage />);
    expect(screen.getByRole('button', { name: 'Continuar' })).toBeInTheDocument();
  });

  test('renders login link', () => {
    render(<RegisterPage />);
    expect(screen.getByText('Já tem uma conta?')).toBeInTheDocument();
    expect(screen.getByText('Acessar')).toBeInTheDocument();
  });
});
