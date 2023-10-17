export default function asycnHandler(fn) {
  return (req, res, next) => fn(req, res, next).catch((err) => next(err));
}
