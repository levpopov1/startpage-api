import { Router } from "express";
import { notFound, genericErrorHandler } from "../middleware/errorHandlers";
import peopleRouter from "./peopleRouter";
import prisma from "../db";

const router = Router();

// basic response on Root endpoint
router.get("/", (req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: "welcome to the API",
  });
});

router.get("/all", async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json({
    statusCode: 200,
    users: users,
  });
});

router.get("/widget", async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      profile: {
        include: {
          widgets: true,
        },
      },
    },
  });
  res.status(200).json({
    statusCode: 200,
    userWidgets: user.profile.widgets,
  });
});

// // apply handlers to specific routes
// router.use("/people", peopleRouter);

// if none of the above routes handle the request it will error out here
router.use(notFound);
router.use(genericErrorHandler);

export default router;
