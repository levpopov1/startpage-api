import { Router } from "express";
import { notFound, genericErrorHandler } from "../middleware/errorHandlers";
import peopleRouter from "./peopleRouter";

const router = Router();

// basic response on Root endpoint
router.get("/", (req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: "welcome to the API",
  });
});

// apply handlers to specific routes
router.use("/people", peopleRouter);

// if none of the above routes handle the request it will error out here
router.use(notFound);
router.use(genericErrorHandler);

export default router;
