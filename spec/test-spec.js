import { User } from './../src/calculator.js';

describe('Planet Age and Life Expectancy', function() {

    it('should display user age on the planet Mercury based on user input', function() {
      const testAge = new User('20','86');
      let planet = 'mer';
      expect(testAge.calcAge(planet).toFixed(1)).toEqual('4.8');
    });

    it('should display user life expectancy on the planet Mercury based on user input', function() {
      const testLife = new User('20', '86');
      let planet = 'mer';
      expect(testLife.calcLife(planet).toFixed(1)).toEqual('20.6');
    });

    it('should display user age on the planet Venus based on user input', function() {
      const testAge = new User('20','86');
      let planet = 'ven';
      expect(testAge.calcAge(planet).toFixed(1)).toEqual('12.4');
    });

    it('should display user life expectancy on the planet Venus based on user input', function() {
      const testLife = new User('20', '86');
      let planet = 'ven';
      expect(testLife.calcLife(planet).toFixed(1)).toEqual('53.3');
    });

    it('should display user age on the planet Mars based on user input', function() {
      const testAge = new User('20','86');
      let planet = 'mar';
      expect(testAge.calcAge(planet).toFixed(1)).toEqual('37.6');
    });

    it('should display user life expectancy on the planet Mars based on user input', function() {
      const testLife = new User('20', '86');
      let planet = 'mar';
      expect(testLife.calcLife(planet).toFixed(1)).toEqual('161.7');
    });
    it('should display user age on the planet Jupiter based on user input', function() {
      const testAge = new User('20','86');
      let planet = 'jup';
      expect(testAge.calcAge(planet).toFixed(1)).toEqual('237.2');
    });

    it('should display user life expectancy on the planet Jupiter based on user input', function() {
      const testLife = new User('20', '86');
      let planet = 'jup';
      expect(testLife.calcLife(planet).toFixed(1)).toEqual('1020.0');
    });

  });
