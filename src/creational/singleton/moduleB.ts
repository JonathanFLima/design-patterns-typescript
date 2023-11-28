import { MyDatabaseModule } from './db/database-module';
import { MyDatabaseFunction } from './db/database-function';
import { db1 as dbFromModuleA, db2 as db2FromModuleA } from './moduleA';

const db1 = MyDatabaseModule;
db1.add({ name: 'Luiz', age: 18 });
db1.add({ name: 'Roberto', age: 25 });
db1.add({ name: 'Joana', age: 44 });
db1.show();

const db2 = MyDatabaseFunction;
db2.add({ name: 'Wowwy', age: 10 });
db2.add({ name: 'Zowwy', age: 90 });

console.log(db1 === dbFromModuleA);
console.log(db2 === db2FromModuleA);
