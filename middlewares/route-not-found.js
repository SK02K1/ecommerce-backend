const routeNotFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Invalid endpoint"
  });
};

module.exports = routeNotFound;
