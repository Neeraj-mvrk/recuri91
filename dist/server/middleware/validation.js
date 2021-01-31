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
exports.verifyLoginUser = exports.verifyCreateUser = void 0;
const service_1 = require("../modules/common/service");
const verifyCreateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body, '::::::::::::::::');
        if (req.body.username && req.body.firstName && req.body.lastName &&
            req.body.mobile && req.body.password && req.body.isActive) {
            next();
        }
        else {
            service_1.insufficientParameters(res);
            ;
        }
    }
    catch (error) {
        next(error);
    }
});
exports.verifyCreateUser = verifyCreateUser;
const verifyLoginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.query, '::::::::::::::::');
        if (req.body.username && req.body.password) {
            next();
        }
        else {
            service_1.insufficientParameters(res);
            ;
        }
    }
    catch (error) {
        next(error);
    }
});
exports.verifyLoginUser = verifyLoginUser;
//# sourceMappingURL=validation.js.map