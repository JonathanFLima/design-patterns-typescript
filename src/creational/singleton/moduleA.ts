import { MyDatabaseModule } from './db/database-module';
import { MyDatabaseFunction } from './db/database-function';

const db1 = MyDatabaseModule;
db1.add({ name: 'Luiz', age: 18 });
db1.add({ name: 'Luis', age: 28 });
db1.add({ name: 'Louis', age: 38 });

const db2 = MyDatabaseFunction;
db2.add({ name: 'Carlos', age: 20 });
db2.add({ name: 'Beatriz', age: 24 });
db2.show();

export { db1, db2 };
