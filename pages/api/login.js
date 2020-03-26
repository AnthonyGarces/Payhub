import db from '../../models';
import bcrytp from "bcrypt";
import jwt from "jsonwebtoken";

export default async function(req, res) {

    const user = await db.user.findOne({
        where: {
            username: req.body.username,
        }
    });

    const result = await bcrytp.compare(req.body.password, user.password);
    
    if (result) {
        const token = jwt.sign({ id: user.id, username: user.username }, "secret secret key")
        res.json({ token })
    } else {
        res.end("401 err user not found")
    }
}