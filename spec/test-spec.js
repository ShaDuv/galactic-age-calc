import { User } from './../src/calculator.js';

describe('Planet Age', function() {
    it('should display user age on the planet Mercury based on user input', function() {
      const testAge = new User('20');
      expect(testAge.mercAge()).toEqual(4.8);
    });

    it('should display user age on the planet Venus based on user input', function() {
      const testAge = new User('20');
      expect(testAge.venAge()).toEqual(12.4);
    });
  });
