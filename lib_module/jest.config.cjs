module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy', // Corriger l'expression régulière ici
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
