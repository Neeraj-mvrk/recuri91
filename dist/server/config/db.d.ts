declare class Db {
    mongoUrl: string;
    connection: any;
    constructor();
    /**
     * Create connection and connect to DB from environment
     */
    mongoSetup(): Promise<void>;
}
declare const _default: Db;
export default _default;
