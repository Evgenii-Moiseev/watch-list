module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.svg\\?react$': '<rootDir>/__mocks__/svgReactMock.tsx',
    '\\.(css|less)$': '<rootDir>/__mocks__/fileMock.js',
  },
}
