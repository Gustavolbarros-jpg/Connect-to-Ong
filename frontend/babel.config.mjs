// frontend/babel.config.mjs
export default {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  // [A SOLUÇÃO ESTÁ AQUI]
  // Adicionamos o plugin que ensina o Babel a entender 'import.meta.env'
  plugins: ['transform-import-meta'], 
};