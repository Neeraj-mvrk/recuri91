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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const environment_1 = __importDefault(require("../environment"));
class Db {
    constructor() {
        this.mongoUrl = environment_1.default.getDBName();
        this.connection = mongoose_1.default.Connection;
    }
    /**
     * Create connection and connect to DB from environment
     */
    mongoSetup() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connect = yield mongoose_1.default.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
                if (connect) {
                    console.log("Connected to MongoDB");
                }
            }
            catch (err) {
                console.log('[DB] MongoDB connection error. Please make sure MongoDB is running.', err);
                process.exit(0);
            }
        });
    }
}
exports.default = new Db();
//# sourceMappingURL=db.js.map