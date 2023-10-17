import dotenv from "dotenv";
dotenv.config({});

const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;
const MAX_COOKIE_AGE = 7 * 24 * 60 * 60 * 1000;
export { PORT, JWT_SECRET, MAX_COOKIE_AGE };
