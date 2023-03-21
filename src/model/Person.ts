import { Schema, model } from "mongoose";

interface IPerson {
  firstname: string;
  surname: string;
  gender: Gender;
}

enum Gender {
  male = "male",
  female = "female",
}

const PersonSchema = new Schema<IPerson>({
  firstname: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: Object.values(Gender),
    required: true,
  },
});

export const Person = model<IPerson>("Person", PersonSchema, "people");
