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

    it('should display user age on the planet Mars based on user input', function() {
      const testAge = new User('20');
      expect(testAge.marAge().toFixed(1)).toEqual('37.6');
    });

    it('should display user age on the planet Jupiter based on user input', function() {
      const testAge = new User('20');
      expect(testAge.jupAge().toFixed(1)).toEqual('237.2');
    });

  });
