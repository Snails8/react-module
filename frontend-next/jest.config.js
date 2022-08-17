module.exports = {
  // 以下はなくてもよい
  // presets: 'ts-jest',
  // testEnvironment: 'node',
  // testがあるファイルを指定(指定がないとnot found
  roots: ['<rootDir>/tests'],
  // TS環境で必要
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  "globals": {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json'
    },
  },
  moduleDirectories: ['node_modules', '<rootDir>']
}