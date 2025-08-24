import apiClient from '../../api/tokenInterceptor.js';

describe('API Client', () => {
  beforeEach(() => {
    const localStorageMock = {
      getItem: jest.fn().mockReturnValue('test-token'),
      setItem: jest.fn(),
      clear: jest.fn(),
      removeItem: jest.fn(),
    };
    global.localStorage = localStorageMock;
  });

  test('is defined and has interceptors', () => {
    expect(apiClient).toBeDefined();
    expect(apiClient.interceptors).toBeDefined();
  });

  test('has defaults object available', () => {
    expect(apiClient).toBeDefined();
    expect(apiClient.defaults).toBeDefined();
  });
});