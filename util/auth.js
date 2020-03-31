import jwt from "jsonwebtoken"

export default function Auth(req, res){

    console.log(req.headers);

    try{
        const token = req.headers.authorization.split(' ')[1]
        const result = jwt.verify(token, process.env.JWT_KEY);
        req.authorization = result;
        res.json({ success: true })
    }catch(e){
        // console.error(e);
        res.status(401).send("You are not authorized")
    }
}
