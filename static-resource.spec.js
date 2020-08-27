jest.mock('./image1.png', () => 'mocked-image-1.png')
jest.mock('./image2.png', () => 'mocked-image-2.png')

const {image1, image2} = require('./static-resource');

test('image 1 is loaded', () => {
  expect(image1).toBe('mocked-image-1.png');
});

test('image 2 is loaded', () => {
  expect(image2).toBe('mocked-image-2.png');
});

/* 
  Remove the following from the pacakge.json then the test will pass
  "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js"
  }
*/