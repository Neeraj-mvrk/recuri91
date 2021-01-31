
export interface ModificationNote {
    modified_on: Date;
    modified_by: String;
    modification_note: String;
}

export const ModificationNote = {
    modified_on: Date,
    modified_by: String,
    modification_note: String
}

export enum res_status_code {
    success = 200,
    bad_request = 400,
    internal_server_error = 500
}