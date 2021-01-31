"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const user_controller_1 = require("../modules/users/user.controller");
const validation_1 = require("../middleware/validation");
class UserRoutes {
    constructor() {
        this.user_controller = new user_controller_1.UserController();
    }
    route(app) {
        app.post('/api/user/register', validation_1.verifyCreateUser, (req, res) => {
            this.user_controller.create_user(req, res);
        });
        app.post('/api/user/login', validation_1.verifyLoginUser, (req, res) => {
            this.user_controller.get_user(req, res);
        });
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=user_routes.js.map