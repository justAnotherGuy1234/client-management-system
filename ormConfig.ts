import {DataSource} from "typeorm"
import * as path from "path"
import { fileURLToPath } from "url";

export const dataSource = new DataSource({
    type : 'mysql',
    host : '127.0.0.1',
    port : 3306,
    username : 'root',
    password : '1234',
    database : 'test',
    entities : [
	__dirname + '/src/**/**.entity{.ts,.js}',
	__dirname + '/src/entities/*{.ts,.js}',
    ],
  migrations: [__dirname + '/src/migrations/**/*{.ts,.js}'],
})
