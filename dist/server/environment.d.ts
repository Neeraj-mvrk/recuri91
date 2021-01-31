declare class Environment {
    private environment;
    constructor(environment: String);
    getPort(): Number;
    getDBName(): string;
    getS3Cred(): object;
}
declare const _default: Environment;
export default _default;
