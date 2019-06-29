import { User } from './../src/calculator.js';

describe('Age', function() {

    it('should display user age based on date of birth entered', function() {
      const testDOB = new User('01/01/1999','86');
      expect(testDOB.age).toEqual(20);
    });
  });

describe('Planet Age', function() {

    it('should display user age on the planet Mercury based on user input', function() {
      const testAge = new User('01/01/1999','86');
      let planet = 'mer';
      expect(testAge.calcAge(planet).toFixed(1)).toEqual('4.8');
    });
  });

describe('Life Expectancy', function() {

    it('should display user life expectancy on the planet Mercury based on user input', function() {
      const testLife = new User('01/01/1999', '86');
      let planet = 'mer';
      expect(testLife.calcLife(planet).toFixed(1)).toEqual('20.6');
    });
  });

describe('Life Expectancy', function() {
    it("should display user's expected remaining years on the planet Mercury based on user input", function() {
      const testLife = new User('01/01/1999', '86');
      let planet = 'mer';
      expect(testLife.leftYears(planet).toFixed(1)).toEqual('15.8');
    });
  });
