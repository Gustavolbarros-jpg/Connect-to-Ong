import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../../../Pags/Home/HomePage';

describe('HomePage Component', () => {
  test('renders hero section', () => {
    render(<HomePage />);
    expect(screen.getByText(/Conecte-se a ONGs e transforme/)).toBeInTheDocument();
  });

  test('renders main features', () => {
    render(<HomePage />);
    expect(screen.getByText('Comunicação')).toBeInTheDocument();
    expect(screen.getByText('Empatia')).toBeInTheDocument();
    expect(screen.getByText('Colaboração')).toBeInTheDocument();
  });

  test('renders call to action button', () => {
    render(<HomePage />);
    expect(screen.getByText('Começar projeto agora!')).toBeInTheDocument();
  });
});
