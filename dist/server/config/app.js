"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./db"));
const user_routes_1 = require("../routes/user_routes");
const common_routes_1 = require("../routes/common-routes");
class App {
    constructor() {
        this.use_routes = new user_routes_1.UserRoutes();
        this.common_routes = new common_routes_1.CommonRoutes();
        this.app = express_1.default();
        this.config();
        db_1.default.mongoSetup();
        this.use_routes.route(this.app);
        this.common_routes.route(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(body_parser_1.default.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map