import express from "express";
import { tableController } from "../../../controllers/index.js";
import authorizationMiddleware from "../../../middlewares/authorization-middleware.js";

const router = express.Router();
router.post(
  "/",
  authorizationMiddleware.authorizeUser,
  authorizationMiddleware.authorizeAdmin,
  tableController.create
);

router.get(
  "/:id",
  authorizationMiddleware.authorizeUser,
  authorizationMiddleware.authorizeAdmin,
  tableController.find
);
router.patch(
  "/:id",
  authorizationMiddleware.authorizeUser,
  authorizationMiddleware.authorizeAdmin,
  tableController.update
);
router.delete(
  "/:id",
  authorizationMiddleware.authorizeUser,
  authorizationMiddleware.authorizeAdmin,
  tableController.destroy
);

export default router;
