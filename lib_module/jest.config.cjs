module.exports = {
  preset: 'ts-jest', // Ajoutez cette ligne pour utiliser ts-jest
  testEnvironment: 'jsdom', // Nécessaire pour les tests React
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy', // Pour traiter les fichiers CSS
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Utilisez ts-jest pour les fichiers TypeScript
  },
};
