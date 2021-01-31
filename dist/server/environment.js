"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Environments;
(function (Environments) {
    Environments["local_environment"] = "local";
    Environments["dev_environment"] = "dev";
    Environments["prod_environment"] = "prod";
})(Environments || (Environments = {}));
class Environment {
    constructor(environment) {
        this.environment = environment;
    }
    getPort() {
        if (this.environment === Environments.prod_environment) {
            return 8081;
        }
        else if (this.environment === Environments.dev_environment) {
            return 8082;
        }
        else {
            return 3000;
        }
    }
    getDBName() {
        if (this.environment === Environments.prod_environment) {
            return 'db_test_project_prod';
        }
        else if (this.environment === Environments.dev_environment) {
            return 'db_test_project_dev';
        }
        else {
            return 'mongodb+srv://neeraj:w8Gh5dQRdqQzbgO2@cluster0.3yttf.mongodb.net/test?retryWrites=true&w=majority';
        }
    }
    getS3Cred() {
        return {
            ID: 'AKIAITCTTWLQGKQF3Z5A',
            SECRET: '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',
            BUCKET: 'recuri91'
        };
    }
}
exports.default = new Environment(Environments.local_environment);
//# sourceMappingURL=environment.js.map