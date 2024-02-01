import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js"

const requireAuth = async (req, res, next) => {
    //? Verify authorization
    const { authorization } = req.headers;
    //
    if(!authorization) {
        return res.status(400).json({ error: "Authorization token required" });
    }

    //? token structure in request: "Bearer tokenfirstPart.secondPart.thirdPart"
    const token = authorization.split(" ")[1]
    try {
        const {_id} = jwt.verify(token, process.env.SECRET_KEY)
        //? find a document in database with id: _id and return only '_id' property inside it
        req.user = await User.findOne({_id}).select("_id")  
        //? set the req.user: _id so all the email, hashedPassword properties are ignored and 
        //? this req.user is now available for all other controllers to use.
        // req.user could be called anythiing. req.<anything>
        next()
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: "Request is not authorized"})
    }
}

export default requireAuth;