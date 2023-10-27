import express from "express";
import { reservationController } from "../../../controllers/index.js";
import { authorizationMiddleware } from "../../../middlewares/index.js";

const router = express.Router();
router.post(
  "/",
  authorizationMiddleware.authorizeUser,
  reservationController.create
);
router.get("/:id", reservationController.find);
router.patch("/:id", reservationController.update);
router.delete("/:id", reservationController.destroy);

export default router;
