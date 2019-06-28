export class User {
  constructor(age) {
    this.age = age;
  }
  mercAge() {
    return this.age * 0.24;
  }
  venAge() {
    return this.age * 0.62;
  };
  marAge() {
    return this.age * 1.88;
  };
  jupAge() {
    return this.age * 11.86;
  };
};
