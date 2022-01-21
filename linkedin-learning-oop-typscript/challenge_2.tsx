// challenge 2: inheritance

// 1. use the User class given
// 2. create an Admin class that extends User
// 3. create a Guest class that implements User
// 4. have both classes pass firstName, lastName, and email in their constructors

export class User {
  firstName: string;
  lastName: string;
  email: string;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  doesEmailMatch(email: string): boolean {
    return this.email === email;
  }
}

export class Admin extends User {
  constructor(firstName: string, lastName: string, email: string) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

export class Guest implements User {
  firstName: string;
  lastName: string;
  email: string;

  // no super needed because it is not a child
  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  doesEmailMatch(email: string): boolean {
    return this.email === email;
  }
}
