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
  const user = await userService.find({ id: decodedToken.id });
  if (!decodedToken) throw new UnauthorizedError();

  req.user = user;
  next();
});

export default authorizeUser;
