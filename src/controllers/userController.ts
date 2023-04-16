import { Request, Response, NextFunction } from "express";
import prisma from "../db";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await prisma.user.findMany({});
    return res.status(200).json({
      users,
    });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    return res.status(200).json({
      user,
    });
  } catch (error) {
    next(error);
  }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        ...req.body,
      },
    });
    return res.status(200).json({
      user: newUser,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        ...req.body,
      },
    });
    return res.status(200).json({
      user: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

export { getAll, getOne, create, update };
