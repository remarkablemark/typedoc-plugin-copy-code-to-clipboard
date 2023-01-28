import { iife } from '../src/utils';

describe('utils', () => {
  describe('iife', () => {
    it('transforms function into IIFE', () => {
      function test() {
        'Hello, world!';
      }
      expect(iife(test)).toMatchInlineSnapshot(`
        "(function(){function test() {
                        'Hello, world!';
                    }test();})();"
      `);
    });
  });
});
