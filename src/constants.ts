export const DB_PROVIDER_NAME = <string>'DATABASE_CONNECTION';
export const DB_PRODUCT_MODEL = <string>'PRODUCT_MODEL';
export const DB_USER_MODEL = <string>'USER_MODEL';
export enum HTTP_ERROR_NAMES {
    GET_FAILURE = 'GET_FAILURE',
    POST_FAILURE = 'POST_FAILURE',
    PUT_FAILURE = 'PUT_FAILURE',
    PATCH_FAILURE = 'PATCH_FAILURE',
    DELETE_FAILURE = 'DELETE_FAILURE',
}
export enum HTTP_ERROR_MESSAGES {
    INVALID_OR_EMPTY = 'Could not create resource due to an invalid or empty field; or an already existant resource',
    NOT_FOUND = 'The resource you´re trying to seek was not found',
    EXISTING_OR_DELETED = 'This resource is already deleted or doesn´t exist',
}
