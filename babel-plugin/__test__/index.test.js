var babel = require('babel-core');
var unpad = require('unpad');
var plugin = require('../index');

function transpile(code) {
    return babel.transform(code, {
        plugins:[
            plugin
        ]
    }).code;
}

describe('babel-plugin-remove-console', () => {
    it('should remove all console.(error/log/info)', () => {
      const source = unpad(`
            function test(a, b){
              console.error('Error;(');
              var c = a+b;
              return c;
            }
      `);

      const expected = unpad(`
            function test(a, b) {
              var c = a + b;
              return c;
            }
      `);
      console.log(source);

      const result = transpile(source);
      expect(result).toBe(expected);

    });

});
