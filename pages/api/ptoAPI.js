import db from '../../models';
import Auth from '../../util/auth';

export default async function(req, res) {

    if(!Auth(req, res)) return;
    
    switch(req.method) {
        case 'POST':
        case 'post':
            const pto = await db.ptoRequest.create({
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                hours: req.body.hours,
                approved: req.body.approved,
                userId: req.body.userId       
            });
            res.end(JSON.stringify(pto))
            break;
        case 'get':
        case 'GET':
            const ptoRequests = await db.ptoRequest.findAll({ 
                where: {
                    //get requests don't take in info like post requests, only send info in the request 
                    userId: req.query.id
                }});
            res.json(ptoRequests);
            break;
        
    }
}