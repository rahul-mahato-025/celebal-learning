import UnauthorizedError from "../errors/unauthorized-error.js";
import tokenService from "../services/token-service.js";
import userService from "../services/user-service.js";
import asycnHandler from "../utils/async-handler.js";

const authorizeUser = asycnHandler(async (req, res, next) => {
  const token = req.cookies["token"];
  if (!token) throw new UnauthorizedError();

  // verify the cookie
  const decodedToken = tokenService.verify(token);
  if (!decodedToken) throw new UnauthorizedError();

  // validate the user
  const user = await userService.find({ _id: decodedToken.id });
  if (!user) throw new UnauthorizedError();

  req.user = user;
  next();
});

const authorizeAdmin = asycnHandler(async (req, res, next) => {
  if (req.user.role !== "admin") throw new UnauthorizedError();
  next();
});

export default {
  authorizeUser,
  authorizeAdmin,
};
