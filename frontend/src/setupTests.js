import "@testing-library/jest-dom";

// Mock global TextEncoder/Decoder for JSDOM
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

// Mock global 'import.meta.env' for Vite variables
Object.defineProperty(global, 'import.meta', {
  value: {
    env: {
      VITE_API_BASE_URL: 'http://localhost:3007/api',
    },
  },
  writable: true,
});