// challenge 1: classes

// 1. create a User class
// 2. add a firstName, lastName, and email property
// 3. add a get to return fullName
// 4. add a method to check if your email param matches the user's current email

// ---------------------------

export class Users {
  firstName: string;
  lastName: string;
  email: string;

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  get fullName(): string {
    if (this.firstName && this.lastName) {
      return this.firstName + ' ' + this.lastName;
    }
  }

  veryifyEmail(email: string): boolean {
    return this.email === email;
  }
}

const user1 = new Users('mary', 'beth', 'mb@gmail.com');
