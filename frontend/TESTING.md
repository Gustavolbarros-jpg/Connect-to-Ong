# Testes Frontend

Este projeto utiliza Jest e React Testing Library para testes automatizados.

## Estrutura de Testes

```
src/
├── __tests__/
│   ├── Components/          # Testes dos componentes
│   │   ├── Button.test.jsx
│   │   ├── InputField.test.jsx
│   │   ├── Modal.test.jsx
│   │   ├── Navbar.test.jsx
│   │   ├── OngCard.test.jsx
│   │   └── Footer.test.jsx
│   ├── Pags/               # Testes das páginas
│   │   ├── Auth/
│   │   │   ├── LoginPage.test.jsx
│   │   │   └── RegisterPage.test.jsx
│   │   ├── Home/
│   │   │   └── HomePage.test.jsx
│   │   ├── OngPage/
│   │   │   └── OngPage.test.jsx
│   │   └── DashboardPage/
│   │       └── Dashboard.test.jsx
│   ├── api/                # Testes da API
│   │   ├── apiClient.test.js
│   │   └── tokenInterceptor.test.js
│   └── App.test.jsx        # Teste principal
```

## Comandos de Teste

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch

# Executar testes com cobertura
npm run test:coverage
```

## Configuração

- **Jest**: Framework de testes
- **React Testing Library**: Biblioteca para testar componentes React
- **jsdom**: Ambiente DOM para testes
- **Babel**: Transpilação de JSX

## Convenções

- Arquivos de teste devem terminar com `.test.jsx` ou `.spec.jsx`
- Testes devem estar na pasta `__tests__` correspondente ao componente/página
- Use `describe` para agrupar testes relacionados
- Use `test` ou `it` para testes individuais
- Use `beforeEach` e `afterEach` para setup/cleanup

## Exemplo de Teste

```jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```
