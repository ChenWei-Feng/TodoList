import databaseConfig from './database.json';

interface IDatabaseConfig {
    username:string;
    password:string;
    database:string;
    host:string;
    dialect:'mysql'|'postgres'|'sqlite'|'mariadb'|'mssql'|'mariadb';
    timezone:string
}

const configs = {
    development: {
        server: {
            host: 'localhost',
            port: 8080
        },
        database:databaseConfig.development as IDatabaseConfig
    },
    test: {
        server: {
            host: 'localhost',
            port: 8080
        },
        database:databaseConfig.test as IDatabaseConfig
    },
    production: {
        server: {
            host: 'localhost',
            port: 8080
        },
        database:databaseConfig.production as IDatabaseConfig
    }
}

type configs = typeof configs;
type configKeys = keyof configs;  //约束当前类型

const NODE_ENV = process.env.NODE_ENV as configKeys || 'development';
export default configs[NODE_ENV];