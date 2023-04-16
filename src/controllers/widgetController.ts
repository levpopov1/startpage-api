import { Request, Response, NextFunction } from "express";
import prisma from "../db";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const widgets = await prisma.widget.findMany({});
    return res.status(200).json({
      widgets,
    });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const widget = await prisma.widget.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    return res.status(200).json({
      widget,
    });
  } catch (error) {
    next(error);
  }
};

const getMany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const widgets = await prisma.widget.findMany({
      where: {
        userId: Number(req.params.id),
      },
    });
    return res.status(200).json({
      widgets,
    });
  } catch (error) {
    next(error);
  }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newWidget = await prisma.widget.create({
      data: {
        ...req.body,
      },
    });
    return res.status(200).json({
      widget: newWidget,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedWidget = await prisma.widget.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        ...req.body,
      },
    });
    return res.status(200).json({
      widget: updatedWidget,
    });
  } catch (error) {
    next(error);
  }
};

export { getAll, getOne, getMany, create, update };
