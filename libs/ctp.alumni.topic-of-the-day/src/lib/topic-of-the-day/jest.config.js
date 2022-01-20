module.exports = {
  displayName: 'ctp.alumni.newsletter-src-lib-topic-of-the-day',
  preset: '../../../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../../../coverage/libs/ctp.alumni.newsletter/src/lib/topic-of-the-day',
};
