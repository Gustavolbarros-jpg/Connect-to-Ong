import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../../../Pags/Home/HomePage';

// Este teste está correto pois já mocka suas dependências diretas.
jest.mock('framer-motion', () => ({
  motion: new Proxy({}, {
    get: (target, prop) => {
      return ({ children, ...props }) => <div {...props}>{children}</div>;
    }
  })
}));

jest.mock('../../../Components/Navbar.jsx', () => {
  return function MockNavbar() {
    return <div data-testid="navbar-mock">Navbar Falso</div>;
  };
});

jest.mock('../../../Components/Footer.jsx', () => {
  return function MockFooter() {
    return <div data-testid="footer-mock">Footer Falso</div>;
  };
});


describe('HomePage Component', () => {
  test('renders hero section', async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    expect(
      await screen.findByText(/Conecte-se a ONGs e transforme/i)
    ).toBeInTheDocument();
  });

  test('renders main features', async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(await screen.findByText('Comunicação')).toBeInTheDocument();
    expect(await screen.findByText('Empatia')).toBeInTheDocument();
    expect(await screen.findByText('Colaboração')).toBeInTheDocument();
  });

  test('renders call to action button', async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(
      await screen.findByText('Começar projeto agora!')
    ).toBeInTheDocument();
  });
});