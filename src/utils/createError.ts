import { CustomError } from '../models/custom-error.model';

export function createError(status, message): CustomError {
  return {
    status: status,
    message: message,
  }
}
