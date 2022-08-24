import { Router } from "express";
import controller from '../controllers/userControllers';
const usersRouter = Router();

usersRouter.get("/", controller.sendEmail);
usersRouter.get("/", controller.getUsers);
usersRouter.get("/:id", controller.getUserById);
usersRouter.get("/email/:email", controller.getUserByEmail);
usersRouter.get("/name/:name", controller.getUsersByName);
usersRouter.post("/create", controller.createUser);
usersRouter.put("/update/:id", controller.updateUser);
usersRouter.delete("/delete/:id", controller.deleteUser);

export default usersRouter;