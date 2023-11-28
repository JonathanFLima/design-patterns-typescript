export class Singleton {
  private static _instance: Singleton | null = null;

  private constructor() {}

  static get instance(): Singleton {
    if (Singleton._instance === null) {
      Singleton._instance = new Singleton();
    }

    return Singleton._instance;
  }
}

// const instance1 = Singleton._instance;
// const instance2 = Singleton._instance;

// console.log(instance1 === instance2);
