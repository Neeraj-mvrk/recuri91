"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const user_model_1 = require("./user.model");
class UserService {
    createUser(user_params, callback) {
        const user = new user_model_1.User(user_params);
        user.save(callback);
    }
    filterUser(query, callback) {
        user_model_1.User.findOne(query, callback);
    }
    createUserList(user_params) {
        let userList = [];
        let obj = { userName: user_params.username, isActive: user_params.isActive };
        userList.push(obj);
        fs_1.default.open(__dirname + './../../files/userList.json', '', (err, file) => {
            if (err) {
                fs_1.default.writeFile(__dirname + './../../files/userList.json', JSON.stringify(userList), (err) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log('filesaved');
                    }
                });
            }
            else {
                let data = fs_1.default.readFileSync(__dirname + "./../../files/userList.json");
                let json = JSON.parse(data);
                json.push(...userList);
                fs_1.default.writeFile(__dirname + "./../../files/userList.json", JSON.stringify(json), (err) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log('file updated');
                    }
                });
            }
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.js.map