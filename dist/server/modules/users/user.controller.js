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
                //console.log(user_data);
                if (user_data) {
                    service_1.successResponse('update user successfull', user_data, res);
                }
                else {
                    service_1.failureResponse('User not found', null, res);
                }
            }
        });
    }
    update_user(req, res) {
        let user_params = req.body;
        this.user_service.updateUser(user_params, (err) => {
            if (err) {
                service_1.mongoError(err, res);
            }
            else {
                service_1.successResponse('update user successfull', null, res);
            }
        });
    }
    delete_user(req, res) {
        if (req.params.id) {
            this.user_service.deleteUser(req.params.id, (err, delete_details) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else if (delete_details.deletedCount !== 0) {
                    service_1.successResponse('delete user successfull', null, res);
                }
                else {
                    service_1.failureResponse('invalid user', null, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map