export interface BackEndErrors {
    rawErrors: Object;
    parsedErrors(): string[];
}