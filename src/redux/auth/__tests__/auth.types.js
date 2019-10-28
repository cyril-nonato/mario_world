import actionTypes from '../auth.types';

describe('Auth types', () => {
  test('should not be a falsy value', () => {
    expect(actionTypes).not.toBeFalsy();
  });
});