import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../Components/Footer';

describe('Footer Component', () => {
  test('renders footer with logo placeholder', () => {
    render(<Footer />);
    expect(screen.getByText('LOGO')).toBeInTheDocument();
  });

  test('renders footer links', () => {
    render(<Footer />);
    expect(screen.getByText('Voluntariado e doação')).toBeInTheDocument();
    expect(screen.getByText('Doação de Sangue')).toBeInTheDocument();
    expect(screen.getByText('Imposto de Renda')).toBeInTheDocument();
    expect(screen.getByText('Área da ONG')).toBeInTheDocument();
    expect(screen.getByText('Agenda de eventos')).toBeInTheDocument();
  });

  test('renders main heading', () => {
    render(<Footer />);
    expect(screen.getByText('Bora Impactar')).toBeInTheDocument();
  });

  test('renders description text', () => {
    render(<Footer />);
    expect(screen.getByText(/A união que transforma/)).toBeInTheDocument();
  });

  test('renders portal section', () => {
    render(<Footer />);
    expect(screen.getByText('Portal')).toBeInTheDocument();
  });
});
