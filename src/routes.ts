import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import validate from "./middleware/validateResource";
import { createUserSchema } from "./schema/user.schema";

function routes(app: Express) {
  app.get("/check", (req: Request, res: Response) => res.sendStatus(200));

  app.post("/api/users", validate(createUserSchema), createUserHandler);
  app.post("/api/sessions", validate(createUserSchema), c);
}

export default routes;
