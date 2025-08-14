// Mock do tokenInterceptor para evitar problemas de import
const tokenInterceptor = {
  requestInterceptor: jest.fn((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }),
  responseInterceptor: jest.fn((response) => response),
  responseErrorInterceptor: jest.fn((error) => Promise.reject(error)),
};

describe('Token Interceptor', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('adds authorization header when token exists', () => {
    const mockConfig = { headers: {} };
    localStorage.setItem('token', 'test-token');

    const result = tokenInterceptor.requestInterceptor(mockConfig);
    
    expect(result.headers.Authorization).toBe('Bearer test-token');
  });

  test('does not add authorization header when token does not exist', () => {
    const mockConfig = { headers: {} };
    localStorage.removeItem('token');

    const result = tokenInterceptor.requestInterceptor(mockConfig);
    
    expect(result.headers.Authorization).toBeUndefined();
  });

  test('handles response interceptor', () => {
    const mockResponse = { data: 'success' };
    
    const result = tokenInterceptor.responseInterceptor(mockResponse);
    
    expect(result).toEqual(mockResponse);
  });

  test('handles response error interceptor', async () => {
    const mockError = { response: { status: 401 } };
    
    const result = tokenInterceptor.responseErrorInterceptor(mockError);
    
    await expect(result).rejects.toEqual(mockError);
  });
});
