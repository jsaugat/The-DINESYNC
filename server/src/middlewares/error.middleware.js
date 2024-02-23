//? if a request reaches this middlware, it means no route has been matched for the requested URL
const notFoundHandler = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

//? if any middleware or route handler before them calls the next(error), the control will be passed directly to the 'errorHandler' middleware.
const errorHandler = (err, req, res, next) => {
  let message = err.message;
  let statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  // a common pattern used to handle situations where a client requests a mongodb resource with an invalid or non-existent identifier (ObjectId in this case).
  if (err.name == "CastError" && err.kind == "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }
  res.status(statusCode).json({
    message,
    status_code: statusCode,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
export { notFoundHandler, errorHandler };
