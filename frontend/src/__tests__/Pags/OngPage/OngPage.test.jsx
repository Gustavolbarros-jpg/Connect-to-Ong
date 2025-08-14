import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import OngPage from '../../../Pags/OngPage/OngPage';

describe('OngPage Component', () => {
  test('renders ONG page content', () => {
    render(<OngPage />);
    expect(screen.getByText('Conecte a extensão da sua Universidade a causas que transformam.')).toBeInTheDocument();
  });
});
