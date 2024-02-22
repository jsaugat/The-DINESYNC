import asyncHandler from "express-async-handler";

export const shield = asyncHandler(async function (req, res, next) {
  let token = req.cookies.jwt;
  // if missing token
  if (!token) {
    handleUnauthorized(res, "Missing: token");
  } else {
    try {
      /**
       * @function 'decodedPayload' - 
       * if token is valid   @returns an object representing the 'decoded payload of the JWT'
       * if token is invalid @throws  an error that's why wrapped in try-catch block
       */
      const decodedPayload = jwt.verify(token, process.env.JWT_SECRET); // returns {_id}
      // retrieve user-info from db based on decoded._id and assign it to a new 'user' prop in req obj.
      // req.user can be utilized by downstream middlwares or route handlers.
      req.user = await User.findById(decodedPayload._id).select("-password");
      next();
    } catch (error) {
      handleUnauthorized(res, "Invalid token");
    }
  }
});

const handleUnauthorized = (res, message) => {
  res.status(401);
  throw new Error(`Unauthorized: ${message}`);
};
