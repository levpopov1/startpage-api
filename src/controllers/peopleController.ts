import { Request, Response, NextFunction } from "express";
import { Person } from "../model/Person";

const getAll = async (req: Request, res: Response) => {
  const people = await Person.find();
  res.status(200).json(people);
};

const getOne = async (req: Request, res: Response) => {
  const person = await Person.findById(req.params.id);
  res.status(200).json(person);
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newPerson = await Person.create(req.body);
    return res.status(200).json(newPerson);
  } catch (error) {
    next(error);
  }
};

const updateOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedPerson = await Person.updateOne(
      { id: req.params.id },
      req.body
    );
    return res.status(200).json(updatedPerson);
  } catch (error) {
    next(error);
  }
};

export { getAll, getOne, create, updateOne };
