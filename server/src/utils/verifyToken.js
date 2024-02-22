// /**
//  ** ------------------------------------------------
//  **           Verification MIDDLEWARES
//  ** ------------------------------------------------
//  */

// import jwt from "jsonwebtoken";
// import { createError } from "./error.js";

// //? verifyToken
// export const verifyToken = (req, res, next) => {
//   //? step 1: Check for available token in req cookie
//   const token = req.cookies?.access_token;
//   // if token doesn't exist inside request cookies
//   if (!token) {
//     return next(createError(401, "Unauthorized: Missing access token"));
//   }
//   //? step 2: Verify the 'token' if it exists
//   jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
//     if (error) return next(createError(403, "Invalid Token"));
//     // if verification is successful, user = decoded user information
//     req.user = user; 
//     // allows subsequent middleware or route handlers to access the authenticated user's information from req.user
//     next(); // go to next middleware i.e. "you are logged in" sender
//   });
// };

// //? verifyUser
// export const verifyUser = (req, res, next) => {
//   verifyToken(req, res, next, () => {
//     // if authenticated user.id === params.id
//     if (req.user.id === req.params.id || req.user.isAdmin) {
//       next(); // if user authorized, allow for CRUD on his account(only).
//     } else {
//       return next(createError(403, "You are not authorized!"));
//     }
//   });
// };

// //? verifyAdmin
// export const verifyAdmin = (req, res, next) => {
//   verifyToken(req, res, next, () => {
//     if (req.user.isAdmin) {
//       next(); // if admin authorized, allow for CRUD on any account.
//     } else {
//       return next(createError(403, "Not authorized for this action."));
//     }
//   });
// };

// // /**
// //  ** ------------------------------------------------
// //  **           Verification MIDDLEWARES
// //  ** ------------------------------------------------
// //  */

// // import jwt from "jsonwebtoken";
// // import { createError } from "./error.js";

// // // verifyToken
// // export const verifyToken = (req, res, next) => {
// //   // step 1: Check for an available token in req cookie
// //   const token = req.cookies?.access_token;

// //   // If the token doesn't exist inside request cookies
// //   if (!token) {
// //     return next(createError(401, "Unauthorized: Missing access token"));
// //   }

// //   // step 2: Verify the 'token' if it exists
// //   jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
// //     if (err) return next(createError(403), "Invalid Token");

// //     // If verification is successful, user = decoded user information
// //     req.user = user;

// //     // Allows subsequent middleware or route handlers to access the authenticated user's information from req.user
// //     next(); // Go to the next middleware or route handler
// //   });
// // };

// // // verifyUser
// // export const verifyUser = (req, res, next) => {
// //   // Corrected: Removed the unnecessary callback function
// //   verifyToken(req, res, next);
  
// //   // If authenticated user.id === params.id
// //   if (!(req.user.id === req.params.id || req.user.isAdmin)) {
// //     return next(createError(403, "You are not authorized"));
// //   }
// //   // If user is authorized, allow for CRUD on their account (only).
// //   next();
// // };

// // // verifyAdmin
// // export const verifyAdmin = (req, res, next) => {
// //   // Corrected: Removed the unnecessary callback function
// //   verifyToken(req, res, next);
// //   if (!req.user.isAdmin) {
// //     return next(createError(403, "Not authorized for this action."));
// //   }
// //   // If admin is authorized, allow for CRUD on any account.
// //   next();
// // };
