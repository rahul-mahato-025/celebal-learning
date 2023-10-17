import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/server-config.js";

class TokenService {
  create(data) {
    const token = jwt.sign(data, JWT_SECRET, { expiresIn: "7d" });
    return token;
  }

  verify(token) {
    return jwt.verify(token, JWT_SECRET);
  }
}

export default new TokenService();
