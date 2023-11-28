import { User } from '../interfaces/users';

export class DatabaseClass {
  private static _instance: DatabaseClass | null = null;
  // "_instance?" seria a mesma coisa

  private users: User[] = [];

  private constructor() {}

  static get instance(): DatabaseClass {
    if (DatabaseClass._instance === null) {
      DatabaseClass._instance = new DatabaseClass();
    }

    return DatabaseClass._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
