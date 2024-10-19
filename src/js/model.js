class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  /**
   * Introduces the Person with their greeting of choice and full name
   * @param {string} [greeting='Hello']
   * @returns {string} An introduction with a greeting a full name
   */
  greet(greeting = 'Hello') {
    return `${greeting}. My name is ${this.firstName} ${this.lastName}.`;
  }
}

export const john = new Person('John', 'Doe');
export const jane = new Person('Jane', 'Doe');
