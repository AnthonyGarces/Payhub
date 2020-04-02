import db from '../../models';
import Auth from '../../util/auth';

export default async function(req, res) {

    if(!Auth(req, res)) return;
    
    switch(req.method) {
        case 'POST':
        case 'post':
            const expense = await db.expense.create({
                item: req.body.item,
                cost: req.body.cost,
                vendor: req.body.vendor,
                userId: req.body.userId       
            });
            res.end(JSON.stringify(expense))
            break;
        case 'get':
        case 'GET':
            const expenses = await db.expense.findAll({ 
                where: {
                    //get requests don't take in info like post requests, only send info in the request 
                    userId: req.query.id
                }});
            res.json(expenses);
            break;
        
    }
}