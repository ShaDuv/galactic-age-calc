export class User {
  constructor(dob, life) {
    this.dob = dob;
    this.age = this.calcBaseAge(dob);
    this.life = life;
    this.planets = {
      mer: 0.24,
      ven: 0.62,
      ear: 1,
      mar: 1.88,
      jup: 11.86
    };
  }
  // https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
  calcBaseAge(dob) {
    let birthday = new Date(dob);
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  calcLife(planet) {
    return this.life * this.planets[planet];
  }
  calcAge(planet) {
    return this.age * this.planets[planet];
  }
  leftYears(planet) {
    return this.calcLife(planet) - this.calcAge(planet);
  }
};
