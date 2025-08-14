import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import OngCard from '../../Components/OngCard';

describe('OngCard Component', () => {
  const mockOng = {
    id: 1,
    name: 'Test ONG',
    description: 'Test description',
    logo: 'test-image.jpg',
    area: 'Education',
    location: 'Test City'
  };

  test('renders ONG information', () => {
    render(<OngCard ong={mockOng} />);
    expect(screen.getByText('Test ONG')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Área: Education')).toBeInTheDocument();
    expect(screen.getByText('📍 Test City')).toBeInTheDocument();
  });

  test('renders ONG image', () => {
    render(<OngCard ong={mockOng} />);
    expect(screen.getByAltText('Logo da Test ONG')).toBeInTheDocument();
  });

  test('shows action button when showActionButton is true', () => {
    render(<OngCard ong={mockOng} showActionButton={true} actionButtonText="Selecionar" />);
    expect(screen.getByText('Selecionar')).toBeInTheDocument();
  });
});
