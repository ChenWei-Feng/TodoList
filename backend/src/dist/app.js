"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var configs_1 = require("./configs");
var koa_1 = require("koa");
var koa_ts_controllers_1 = require("koa-ts-controllers");
var path_1 = require("path");
var koa_bodyparser_1 = require("koa-bodyparser");
var sequelize_typescript_1 = require("sequelize-typescript");
var KoaRouter = require('koa-router');
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var app, router, db;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                app = new koa_1["default"]();
                router = new KoaRouter();
                db = new sequelize_typescript_1.Sequelize(__assign(__assign({}, configs_1["default"].database), { models: [__dirname + '/models/**/*'] }));
                //注册路由
                return [4 /*yield*/, koa_ts_controllers_1.bootstrapControllers(app, {
                        router: router,
                        basePath: '/api',
                        versions: [1],
                        controllers: [
                            path_1["default"].resolve(__dirname + '/controllers/**/*')
                        ],
                        errorHandler: function (err, ctx) { return __awaiter(void 0, void 0, void 0, function () {
                            var status, body;
                            return __generator(this, function (_a) {
                                status = 500;
                                body = {
                                    statusCode: status,
                                    error: "Internal Server error",
                                    message: "An internal server error occurred"
                                };
                                if (err.output) {
                                    status = err.output.statusCode;
                                    body = __assign({}, err.output.payload);
                                    if (err.data) {
                                        body.errorDetails = err.data;
                                    }
                                }
                                ctx.status = status;
                                ctx.body = body;
                                return [2 /*return*/];
                            });
                        }); }
                    })];
            case 1:
                //注册路由
                _a.sent();
                app.use(koa_bodyparser_1["default"]());
                app.use(router.routes());
                app.listen(configs_1["default"].server.port, configs_1["default"].server.host, function () {
                    console.log("\u670D\u52A1\u542F\u52A8\u6210\u529F\uFF1Ahttp://" + configs_1["default"].server.host + ":" + configs_1["default"].server.port);
                });
                return [2 /*return*/];
        }
    });
}); })();
