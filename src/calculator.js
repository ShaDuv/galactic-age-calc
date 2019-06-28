export class User {
  constructor(age, life) {
    this.age = age;
    this.life = life;
    this.planets = {
      mer: 0.24,
      ven: 0.62,
      ear: 1,
      mar: 1.88,
      jup: 11.86
    };
  }
  calcLife(planet) {
    return this.life * this.planets[planet];
  }
  calcAge(planet) {
    return this.age * this.planets[planet];
  }
};
