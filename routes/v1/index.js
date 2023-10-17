import express from "express";
import userController from "../../controllers/user-controller.js";
import authorizeUser from "../../middlewares/authorize-user.js";

const router = express.Router();
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", authorizeUser, userController.logout);

export default router;
