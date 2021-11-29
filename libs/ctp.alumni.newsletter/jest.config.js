module.exports = {
  displayName: 'ctp.alumni.newsletter',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  testTimeout: 20000,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/ctp.alumni.newsletter',
  testEnvironment: "node"
};
