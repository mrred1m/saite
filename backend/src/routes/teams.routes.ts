import { Router } from "express";
import TutorialController from "../controllers/teams.controller";

class TutorialRoutes {
  router = Router();
  controller = new TutorialController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    this.router.get("/", this.controller.findAll);

    this.router.get("/:id", this.controller.findOne);
  }
}

export default new TutorialRoutes().router;