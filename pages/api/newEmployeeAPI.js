import db from '../../models';
import bcrypt from 'bcrypt';
import Auth from '../../util/auth';

export default async function(req, res) {
  
  Auth(req, res);

  const hash = await bcrypt.hash(req.body.password, 10);

  
  const employee = await db.user.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    authLevel: req.body.authLevel,
    username: req.body.username,
    password: hash,
    manager: req.body.manager,
    employmentDate: req.body.employmentDate
  });

  res.end(JSON.stringify(employee));
}