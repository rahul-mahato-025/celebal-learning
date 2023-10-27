import { reservationService } from "../services/index.js";
import asycnHandler from "../utils/async-handler.js";

class ReservationController {
  create = asycnHandler(async function (req, res) {
    const { table } = req.body;
    const reservation = await reservationService.create({
      table,
      user: req.user._id,
    });
    res.status(201).json({
      data: reservation,
      success: true,
      message: "Your reservation is successful.",
    });
  });

  update = asycnHandler(async function (req, res) {
    const { id } = req.params;
    const reservation = await reservationService.update(id, req.body);
    res.status(200).json({
      data: reservation,
      success: true,
      message: "reservation updated successfully.",
    });
  });

  destroy = asycnHandler(async function (req, res) {
    const { id } = req.params;
    await reservationService.destroy(id);
    res.status(200).json({
      data: {},
      success: true,
      message: "reservation deleted successfully.",
    });
  });

  find = asycnHandler(async function (req, res) {
    const { id } = req.params;
    const reservation = await reservationService.findOne({ _id: id });
    res.status(200).json({
      data: reservation,
      success: true,
      message: "reservation fetched successfully.",
    });
  });
}

export default new ReservationController();
