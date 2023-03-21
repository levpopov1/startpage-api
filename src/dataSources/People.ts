import { DataSource } from "apollo-datasource";
import { Person } from "../model/Person";

class PeopleAPI extends DataSource {
  constructor() {
    super();
  }

  async getPeople() {
    return await Person.find();
  }

  async getPersonById(id: string) {
    return await Person.findById(id);
  }

  async createPerson(personInput: any) {
    const { firstname, surname, gender } = personInput;
    return await Person.create({ firstname, surname, gender });
  }
}

export default PeopleAPI;
