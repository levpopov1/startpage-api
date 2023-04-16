import { Router } from "express";
import { notFound, genericErrorHandler } from "../middleware/errorHandlers";
import * as userController from "../controllers/userController";
import * as widgetController from "../controllers/widgetController";

const router = Router();

// basic response on Root endpoint
router.get("/", (req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: "welcome to the API",
  });
});

// User Routes
router.get("/users", userController.getAll);
router.get("/users/:id", userController.getOne);
router.post("/users", userController.create);
router.post("/users/:id", userController.update);

// Widget Routes
router.get("/widgets", widgetController.getAll);
router.get("/widgets/:id", widgetController.getOne);
router.get("/widgets/user/:id", widgetController.getMany);
router.post("/widgets", widgetController.create);
router.post("/widgets/:id", widgetController.update);

// if none of the above routes handle the request it will error out here
router.use(notFound);
router.use(genericErrorHandler);

export default router;
