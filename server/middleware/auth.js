import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
// execute some functions and do something next
const auth = async (req, res, next) => {
  try {
    // check if user is rlly authorized
    const token = req.headers.authorization.split(" ")[1]; // token
    const isCustomAuth = token.length < 500; // if token is less than 500 characters, it's a custom auth
    // otherwise its google auth
    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test"); // gets username and Id from token using secret key

      req.userId = decodedData?.id;
    } else {
      // if working w google token so secret not needed
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub; // sub is unique  & differentiates users
    }

    next();
    // in order to like a post we check w the user auth logic and only then move next
  } catch (error) {
    console.log(error);
  }
};

export default auth;
