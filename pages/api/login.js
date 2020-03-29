import db from '../../models';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
require("dotenv").config(); 

export default async function(req, res) {
    //finds the username in the db
    const user = await db.user.findOne({
        where: {
            username: req.body.username,
        }
    });
    //compares the hashed password in the db with the inputted, freshly hashed password
    const result = await bcrypt.compare(req.body.password, user.password);
    
    //sends a token with an encryption secret that, when stored locally, keeps user authorized/signed in
    if (result) {
        //"7nx6..." is the secret key, set to env variable l8r
        const token = jwt.sign({ 
            id: user.id, 
            username: user.username, 
            authLevel: user.authLevel, 
            name: user.firstName + " " + user.lastName }, 
            process.env.JWT_KEY)

        res.json({ id: user.id, name: user.firstName + " " + user.lastName, authLevel: user.authLevel, token })
    } else {
        res.end("401 err user not found")
    }
}