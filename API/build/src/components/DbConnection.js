"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql');
class DbConnection {
    constructor() {
        //singleton implementation
        const instance = this.instance;
        if (instance) {
            return instance;
        }
        this.instance = this;
        //connectuion poool initialization
        this.conectionPool = mysql.createPool({
            connectionLimit: 10,
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
    }
    makeQuery(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.conectionPool.query(query, (err, rows) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(rows);
                });
            });
        });
    }
}
exports.default = DbConnection;
//# sourceMappingURL=DbConnection.js.map