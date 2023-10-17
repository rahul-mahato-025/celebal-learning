function globaErrorHandler(err, req, res, next) {
  return res.status(err.statusCode || 500).json({
    msg: err.message,
    success: false,
  });
}

export default globaErrorHandler;
