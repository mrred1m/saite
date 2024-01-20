import { Application } from "express";
import teamRoutes from "./teams.routes";
import homeRoutes from "./home.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api", homeRoutes);
    app.use("/api/teams", teamRoutes);
  }
}