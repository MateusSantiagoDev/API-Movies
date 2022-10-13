import { repository } from "../database/repository/repository.js";

import { findByNameUseCase } from "../services/useCase/findByNameUseCase.js";
import { findByNameController } from "../controllers/FindByNameController.js";
import { findByNameRouter } from "../routers/findByNameRouter.js";

export const makeFindByName = (router) => {
  const database = new repository();
  const useCase = new findByNameUseCase(database);
  const controller = new findByNameController(useCase);
  const route = new findByNameRouter(controller, router);
  return route;
};