import React from 'react';
import { render, screen } from '@testing-library/react';
import AppWrapper from '../App';

// [CORREÇÃO] Usando <rootDir> para o caminho do mock
jest.mock('../api/tokenInterceptor.js', () => ({
  __esModule: true,
  default: {
    get: jest.fn(() => Promise.resolve({ data: [] })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
  },
}));

// Mock da HomePage para isolar o teste do App
jest.mock('../Pags/Home/HomePage', () => {
  return function MockHomePage() {
    return <div>Conteúdo da HomePage Mock</div>;
  };
});

describe('App Component', () => {
  test('renders without crashing and shows mocked home page content', () => {
    render(<AppWrapper />);
    expect(screen.getByText('Conteúdo da HomePage Mock')).toBeInTheDocument();
  });

  test('renders navigation bar', () => {
    render(<AppWrapper />);
    expect(screen.getByAltText("Logo Connect to ONGs")).toBeInTheDocument();
  });
});