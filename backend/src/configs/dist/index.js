"use strict";
exports.__esModule = true;
var configs = {
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
};
var NODE_ENV = process.env.NODE_ENV || 'development';
exports["default"] = configs[NODE_ENV];
