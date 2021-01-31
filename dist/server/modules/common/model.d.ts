export interface ModificationNote {
    modified_on: Date;
    modified_by: String;
    modification_note: String;
}
export declare const ModificationNote: {
    modified_on: DateConstructor;
    modified_by: StringConstructor;
    modification_note: StringConstructor;
};
export declare enum res_status_code {
    success = 200,
    bad_request = 400,
    internal_server_error = 500
}
