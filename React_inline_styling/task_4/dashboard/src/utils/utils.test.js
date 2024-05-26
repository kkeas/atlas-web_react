// task_3/dashboard/src/utils.test.js
import { getFullYear, getFooterCopy, getLatestNotification } from '../../../task_2/dashboard/src/utils';

// Test for getFullYear function
test('getFullYear should return the current year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

// Test for getFooterCopy function
test('getFooterCopy should return correct string when isIndex is true', () => {
  const result = getFooterCopy(true);
  expect(result).toBe('Holberton School');
});

test('getFooterCopy should return correct string when isIndex is false', () => {
  const result = getFooterCopy(false);
  expect(result).toBe('Holberton School main dashboard');
});

// Test for getLatestNotification function
test('getLatestNotification should return correct string', () => {
  const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
  expect(getLatestNotification()).toBe(expectedString);
});
