import { User } from './../src/calculator.js';

describe('Planet Age', function() {
    it('should display user age on the planet mercury based on user input', function() {
      const testAge = new User('20');
      expect(testAge.mercAge()).toEqual(4.8);
    });
  });
