import db from '../../models';

export default async function(req, res) {
    
    switch(method) {
        case post:
            const timeCard = await db.timeCard.create({
                sunday: req.body.sunday,
                monday: req.body.monday,  
                tuesday: req.body.tuesday,   
                wednesday: req.body.wednesday,   
                thursday: req.body.thursday,   
                friday: req.body.friday,
                saturday: req.body.saturday,   
                endofweek: req.body.endofweek          
            });
            res.end(JSON.stringify(timeCard))
            break;
        case get:
            const timeCards = await db.timeCard.findAll({ 
                where: {
                    id: req.body.id
                }});
            res.end(JSON.stringify(timeCards))
            break;
        
    }
}