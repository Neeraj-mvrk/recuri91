"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.res_status_code = exports.ModificationNote = void 0;
exports.ModificationNote = {
    modified_on: Date,
    modified_by: String,
    modification_note: String
};
var res_status_code;
(function (res_status_code) {
    res_status_code[res_status_code["success"] = 200] = "success";
    res_status_code[res_status_code["bad_request"] = 400] = "bad_request";
    res_status_code[res_status_code["internal_server_error"] = 500] = "internal_server_error";
})(res_status_code = exports.res_status_code || (exports.res_status_code = {}));
//# sourceMappingURL=model.js.map