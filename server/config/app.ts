import express from "express";
import bodyParser from "body-parser";
import Db from "./db"
import {UserRoutes} from "../routes/user_routes";
import {CommonRoutes} from "../routes/common-routes"


class App {
   public app:express.Application;
   private use_routes:UserRoutes = new UserRoutes();
   private common_routes:CommonRoutes = new CommonRoutes();

   constructor() {
      this.app = express();
      this.config();
      Db.mongoSetup();
      this.use_routes.route(this.app);
      this.common_routes.route(this.app);
   }
private config(): void {
      // support application/json type post data
      this.app.use(bodyParser.json());
      //support application/x-www-form-urlencoded post data
      this.app.use(bodyParser.urlencoded({ extended: false }));
   }

}

export default new App().app;