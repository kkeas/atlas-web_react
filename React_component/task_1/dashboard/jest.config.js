module.exports = {
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.js',
      '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
      },
    setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
    resolve: {
      extensions: [".jpeg"],
  },
  // transformIgnorePatterns: [
  //   '<rootDir>/node_modules/',
  //   '\\.(css|less|scss|sass)$',
  // ],
  };

