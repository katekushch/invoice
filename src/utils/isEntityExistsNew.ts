import { createError } from './createError';

export function isEntityExistsNew(model, param) {
  return (req, res, next) => {
    return model.findById(req.params[param])
    .then((foundedEntity) => {
      if (!foundedEntity) {
        throw new Error();
      }
      req.entity = foundedEntity;
      next();
    })
    .catch((err) => next(createError(404, 'Entity not found!')));
  }
}
