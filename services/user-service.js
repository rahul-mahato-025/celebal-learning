import bcrypt from "bcrypt";
import User from "../models/user-model.js";
import tokenService from "./token-service.js";
import { MAX_COOKIE_AGE } from "../config/server-config.js";
import {
  invalidEmailError,
  CustomError,
  DuplicateDataError,
  ValidationError,
} from "../errors/index.js";
import validateEmail from "../utils/validate-email.js";

class UserService {
  async register(userData, res) {
    try {
      const userExists = await this.find({ email: userData.email });
      if (userExists) throw new DuplicateDataError("User", userData.email);

      const isValidEmail = validateEmail(userData.email);
      if (!isValidEmail) throw invalidEmailError;

      const user = await this.create(userData);
      const token = tokenService.create({ id: user._id });
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: MAX_COOKIE_AGE,
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async login(userData, res) {
    try {
      const user = await this.find({ email: userData.email });
      if (!user) throw new ValidationError("Invalid Credentials");
      const validPassword = await this.comparePassword(
        userData.password,
        user.password
      );

      if (!validPassword) throw new ValidationError("Invalid Credentials");
      const token = tokenService.create({ id: user._id });
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: MAX_COOKIE_AGE,
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async create(userData) {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      return error;
    }
  }

  async comparePassword(plainPassword, encryptedPassword) {
    return await bcrypt.compare(plainPassword, encryptedPassword);
  }

  async find(query) {
    try {
      const user = await User.findOne(query);
      return user;
    } catch (error) {
      throw new CustomError("User Not Found", 404);
    }
  }
}

export default new UserService();
