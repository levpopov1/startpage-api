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
      widgets: true,
    },
  });
  res.status(200).json({
    statusCode: 200,
    widgets: user.widgets,
  });
});

router.post("/widget/:id", async (req, res) => {
  const updatedWidget = await prisma.widget.update({
    where: {
      id: Number(req.params.id),
    },
    data: {
      ...req.body,
    },
  });

  // const updatedSize = await prisma.size.update({
  //   where: {
  //     widgetId: Number(req.params.id),
  //   },
  //   data: {
  //     ...req.body.size,
  //   },
  // });
  // const updatedWidget = await prisma.widget.findUnique({
  //   where: {
  //     id: Number(req.params.id),
  //   },
  //   include: {
  //     location: true,
  //     size: true,
  //   },
  // });
  console.log(updatedWidget);
  res.status(200).json({
    statusCode: 200,
    widget: updatedWidget,
  });
});

// // apply handlers to specific routes
// router.use("/people", peopleRouter);

// if none of the above routes handle the request it will error out here
router.use(notFound);
router.use(genericErrorHandler);

export default router;
