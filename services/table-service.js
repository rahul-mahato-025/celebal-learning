import { Table } from "../models/index.js";
import CrudService from "./crud-service.js";

class TableService extends CrudService {
  constructor() {
    super(Table);
  }
}

export default new TableService();
