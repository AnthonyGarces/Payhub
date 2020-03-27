import db from '../../models';
import bcrypt from 'bcrypt';

export default async function(req, res) {

    const hash = bcrypt.hash(req.body.password, 10);

    const employee = ({success: true})
    // const employee = await db.user.create({
    //   firstName: req.body.firstName,
    //   lastName: req.body.lastName,
    //   authLevel: req.body.authLevel,
    //   username: req.body.username,
    //   password: hash,
    //   manager: req.body.manager,
    //   employmentDate: req.body.employmentDate
    // });

    res.end(JSON.stringify(employee));
}