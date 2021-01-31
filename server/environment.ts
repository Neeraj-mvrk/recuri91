enum Environments {
    local_environment = 'local',
    dev_environment = 'dev',
    prod_environment = 'prod'
}

class Environment {
    private environment: String;

    constructor(environment: String) {
        this.environment = environment;
    }

    getPort(): Number {
        if (this.environment === Environments.prod_environment) {
            return 8081;
        } else if (this.environment === Environments.dev_environment) {
            return 8082;
        } else {
            return 3000;
        }
    }

    getDBName(): string {
        if (this.environment === Environments.prod_environment) {
            return 'db_test_project_prod';
        } else if (this.environment === Environments.dev_environment) {
            return 'db_test_project_dev';
        } else {
            return 'mongodb+srv://neeraj:w8Gh5dQRdqQzbgO2@cluster0.3yttf.mongodb.net/test?retryWrites=true&w=majority';
        }
    }

    getS3Cred(): object {
        return {
            ID:'AKIAITCTTWLQGKQF3Z5A',
            SECRET:'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',
            BUCKET:'recuri91'  
        }
    }
}

export default new Environment(Environments.local_environment);