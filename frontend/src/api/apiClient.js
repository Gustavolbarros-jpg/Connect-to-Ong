import apiClient from '../../api/tokenInterceptor.js';
// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

describe("API Client", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.getItem.mockReturnValue("test-token");
  });

  test("has axios instance with interceptors", () => {
    expect(apiClient).toBeDefined();
    expect(apiClient.interceptors).toBeDefined();
    expect(apiClient.interceptors.request).toBeDefined();
    expect(apiClient.interceptors.response).toBeDefined();
  });

  test("creates axios instance with defaults object available", () => {
    expect(apiClient).toBeDefined();
    expect(apiClient.defaults).toBeDefined();
  });
});
export default apiClient;