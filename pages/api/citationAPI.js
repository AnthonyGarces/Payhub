import db from '../../models';
import Auth from '../../util/auth';

export default async function(req, res) {

    if(!Auth(req, res)) return;
    
    switch(req.method) {
        case 'POST':
        case 'post':
            const citation = await db.citation.create({
                date: req.body.date,
                event: req.body.event,
                action: req.body.action,
                userId: req.body.userId       
            });
            res.end(JSON.stringify(citation))
            break;
        case 'get':
        case 'GET':
            const citations = await db.citation.findAll({ 
                where: {
                    //get requests don't take in info like post requests, only send info in the request 
                    userId: req.query.id
                }});
            res.json(citations);
            break;
        
    }
}