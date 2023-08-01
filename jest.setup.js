import '@testing-library/jest-dom/extend-expect';
import { afterEach, jest } from '@jest/globals';

afterEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});
