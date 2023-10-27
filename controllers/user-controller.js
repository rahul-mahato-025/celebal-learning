import UserDto from "../dtos/user-dto.js";
import ValidationError from "../errors/validation-error.js";
import userService from "../services/user-service.js";
import asycnHandler from "../utils/async-handler.js";

class UserController {
  register = asycnHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      throw new ValidationError("Please enter the reqiured fields");
    const user = await userService.register({ name, email, password }, res);
    return res.status(201).json({
      data: new UserDto(user),
      success: true,
      msg: "User created successfully",
    });
  });

  login = asycnHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
      throw new ValidationError("Missing required fields");
    const user = await userService.login({ email, password }, res);
    return res.status(200).json({
      data: new UserDto(user),
      success: true,
      msg: "logged in successfully",
    });
  });

  logout = (req, res) => {
    res.clearCookie("token");
    return res.status(200).json({
      data: {},
      success: true,
      msg: "Logged out successfully.",
    });
  };
}

export default new UserController();
