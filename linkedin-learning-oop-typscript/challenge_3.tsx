// challenge 3: encapsulation

// 1. use the classes below
// 2. add an appropriate readonly property to the User class
// 3. be explicit with your public properties on User class
// 4. add an appropraite protected property in User and access it with a private method in Admin

export class User {
  public readonly id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  protected dob: Date;

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public doesEmailMatch(email: string): boolean {
    return this.email === email;
  }
}

export class Admin extends User {
  public readonly yearBorn: number;

  constructor(firstName: string, lastName: string, email: string) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.yearBorn = this.getYear();
  }

  private getYear(): number {
    return this.dob.getFullYear();
  }
}
