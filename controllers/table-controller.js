import { tableService } from "../services/index.js";
import { TableDto } from "../dtos/index.js";
import asycnHandler from "../utils/async-handler.js";

class TableController {
  create = asycnHandler(async function (req, res) {
    const { capacity, amount } = req.body;
    const table = await tableService.create({
      capacity: Number(capacity),
      amount: Number(amount),
    });
    res.status(201).json({
      data: new TableDto(table),
      success: true,
      message: "Table created successfully.",
    });
  });

  find = asycnHandler(async function (req, res) {
    const { id } = req.params;
    const table = await tableService.findOne({ _id: id });
    res.status(200).json({
      data: new TableDto(table),
      success: true,
      message: "Table fetched successfully.",
    });
  });

  update = asycnHandler(async function (req, res) {
    const { id } = req.params;
    const table = await tableService.update(id, req.body);
    res.status(200).json({
      data: new TableDto(table),
      success: true,
      message: "Table updated successfully.",
    });
  });

  destroy = asycnHandler(async function (req, res) {
    const { id } = req.params;
    await tableService.destroy(id);
    res.status(200).json({
      data: {},
      success: true,
      message: "Table deleted successfully.",
    });
  });
}

export default new TableController();
