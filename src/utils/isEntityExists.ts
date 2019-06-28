import { createError } from './createError';

export function isEntityExists(array: any[], paramName: string) {
  return (req, res, next) => {
    const paramValue = Number(req.params[paramName]);
    const foundedIndex = array.findIndex((item) => item._id === paramValue);
    if (foundedIndex === -1) {
      next(createError(404, 'Entity not found!'));
    } else {
      req.entityIndex = foundedIndex;
      next();
    }
  }
}
