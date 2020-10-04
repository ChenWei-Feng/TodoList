"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var sequelize_typescript_1 = require("sequelize-typescript");
var crypto = require('crypto');
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(User.prototype, "password", {
        set: function (val) {
            var md5 = crypto.createHash('md5');
            var newPassword = md5.update("" + val).digest('hex');
            this.setDataValue('password', newPassword);
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        sequelize_typescript_1.PrimaryKey,
        sequelize_typescript_1.AutoIncrement,
        sequelize_typescript_1.Column
    ], User.prototype, "id");
    __decorate([
        sequelize_typescript_1.AllowNull(false),
        sequelize_typescript_1.Unique,
        sequelize_typescript_1.Column({
            type: sequelize_typescript_1.DataType.STRING(50)
        })
    ], User.prototype, "name");
    __decorate([
        sequelize_typescript_1.Column
    ], User.prototype, "password");
    __decorate([
        sequelize_typescript_1.CreatedAt
    ], User.prototype, "createdAt");
    __decorate([
        sequelize_typescript_1.UpdatedAt
    ], User.prototype, "updatedAt");
    User = __decorate([
        sequelize_typescript_1.Table({
            tableName: 'User'
        })
    ], User);
    return User;
}(sequelize_typescript_1.Model));
exports.User = User;
