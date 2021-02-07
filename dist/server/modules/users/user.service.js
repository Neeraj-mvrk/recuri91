"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("./user.model");
class UserService {
    createUser(user_params, callback) {
        const user = new user_model_1.User(user_params);
        user.save(callback);
    }
    filterUser(query, callback) {
        user_model_1.User.findOne(query, callback);
    }
    updateUser(user_params, callback) {
        const query = { _id: user_params._id };
        user_model_1.User.findOneAndUpdate(query, user_params, callback);
    }
    deleteUser(_id, callback) {
        const query = { _id: _id };
        user_model_1.User.deleteOne(query, callback);
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.js.map