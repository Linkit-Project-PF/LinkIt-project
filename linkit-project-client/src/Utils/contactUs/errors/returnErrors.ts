import { ValidationError } from "./errors";

export const returnContactErrors = (message: string) => {
    throw new ValidationError(message);
}