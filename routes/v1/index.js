import express from "express";
import userController from "../../controllers/user-controller.js";
import reservationRoutes from "./reservations/index.js";
import tableRoutes from "./tables/index.js";
import { authorizationMiddleware } from "../../middlewares/index.js";

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get(
  "/logout",
  authorizationMiddleware.authorizeUser,
  userController.logout
);

//reservation routes
router.use("/reservations", reservationRoutes);
//table routes
router.use("/tables", tableRoutes);

export default router;
