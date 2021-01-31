"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const service_1 = require("../common/service");
const user_service_1 = __importDefault(require("./user.service"));
class UserController {
    constructor() {
        this.user_service = new user_service_1.default();
    }
    create_user(req, res) {
        let user_params = req.body;
        this.user_service.createUser(user_params, (err, user_data) => {
            if (err) {
                service_1.mongoError(err, res);
            }
            else {
                service_1.successResponse('create user successfull', user_data, res);
                this.user_service.createUserList(user_data);
            }
        });
    }
    get_user(req, res) {
        const user_filter = { username: req.body.username };
        this.user_service.filterUser(user_filter, (err, user_data) => {
            if (err) {
                service_1.mongoError(err, res);
            }
            else {
                console.log(user_data);
                if (user_data) {
                    this.check(req, res, user_data);
                }
                else {
                    service_1.failureResponse('User not found', null, res);
                }
            }
        });
    }
    check(req, res, data) {
        if (data.password != req.body.password) {
            console.log('222222222222222');
            service_1.failureResponse('Password Mismatch', null, res);
        }
        else if (data.isActive === false) {
            service_1.failureResponse('You are not a active user', null, res);
        }
        else {
            service_1.successResponse('User sucessfully login', data, res);
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map