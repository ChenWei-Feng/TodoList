const configs = {
    development: {
        server: {
            host: 'localhost',
            port: 8080
        }
    },
    test: {
        server: {
            host: 'localhost',
            port: 8080
        }
    },
    production: {
        server: {
            host: 'localhost',
            port: 8080
        }
    }
}

type configs = typeof configs;
type configKeys = keyof configs;  //约束当前类型

const NODE_ENV = process.env.NODE_ENV as configKeys || 'development';
export default configs[NODE_ENV];