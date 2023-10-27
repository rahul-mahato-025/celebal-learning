import CrudService from "./crud-service.js";
import { Reservation } from "../models/index.js";
import { tableService } from "./index.js";

class ReservationService extends CrudService {
  constructor() {
    super(Reservation);
  }

  async create(data) {
    try {
      const table = await tableService.findOne({ _id: data.table });
      if (!table) throw "Table not found.";
      if (table.status === "reserved")
        throw new Error("Table is already reserved.");
      const obj = { ...data, totalAmount: table.amount };
      const reservation = await Reservation.create(obj);
      await tableService.update(data.table, {
        status: "reserved",
      });
      return reservation;
    } catch (error) {
      throw error;
    }
  }
}

// [tableid, amt]
export default new ReservationService();
