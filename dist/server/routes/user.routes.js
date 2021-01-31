"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../modules/users/user.controller");
const validation_1 = require("../middleware/validation");
const router = express_1.default.Router();
const userController = new user_controller_1.UserController();
router.post('/register', validation_1.verifyCreateUser, userController.create_user);
router.post('/login', validation_1.verifyLoginUser, userController.get_user);
exports.default = router;
//# sourceMappingURL=user.routes.js.map