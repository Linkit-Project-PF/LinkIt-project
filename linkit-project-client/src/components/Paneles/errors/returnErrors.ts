import { ValidationError } from "./errors";

export const returnFormErrors = (message: string) => {
    throw new ValidationError(message);
}