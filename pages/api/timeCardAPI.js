import db from '../../models';
import Auth from '../../util/auth';

export default async function(req, res) {

    if(!Auth(req, res)) return;
    
    switch(req.method) {
        case 'POST':
        case 'post':
            const timeCard = await db.timeCard.create({
                sunday: req.body.sunday,
                monday: req.body.monday,  
                tuesday: req.body.tuesday,   
                wednesday: req.body.wednesday,   
                thursday: req.body.thursday,   
                friday: req.body.friday,
                saturday: req.body.saturday,   
                endofweek: req.body.endofweek,
                userId: req.body.userId       
            });
            res.end(JSON.stringify(timeCard))
            break;
        case 'get':
        case 'GET':
            const timeCards = await db.timeCard.findAll({ 
                where: {
                    id: req.body.id
                }});
            res.end(JSON.stringify(timeCards))
            break;
        
    }
}