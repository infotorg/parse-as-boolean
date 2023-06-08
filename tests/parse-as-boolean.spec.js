import { parseAsBoolean } from '../src/parse-as-boolean';

describe('Tests parseAsBoolean function', () => {
  describe('case insensitive', () => {
    test.each(['1', 'true', 'yes', 'TRUE', 'YES', 'on', 'ON', 'enabled', 'ENABLED', 1, true])(
      'should return true for a truthy value: %p',
      (value) => {
        expect(parseAsBoolean(value)).toBe(true);
      }
    );

    test.each([undefined, null, '', 0, '0', 0.5, false, 'false', 'FALSE', 'off', 'OFF', 'no', 'NO', [], {}, () => {}])(
      'should return false for a falsy or complex value: %p',
      (value) => {
        expect(parseAsBoolean(value)).toBe(false);
      }
    );
  });

  describe('case sensitive', () => {
    test.each(['1', 'true', 'yes', 'on', 'enabled'])(
      'should return true for a case sensitive truthy value: %p',
      (value) => {
        expect(parseAsBoolean(value, true)).toBe(true);
      }
    );

    test.each(['TRUE', 'YES', 'ON', 'ENABLED'])('should return false for a case sensitive value: %p', (value) => {
      expect(parseAsBoolean(value, true)).toBe(false);
    });
  });
});
