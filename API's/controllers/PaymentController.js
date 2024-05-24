
const Payment = require('../models/Payment');


async function createPayment(req,res){
    try{
        const Payment=await Payment.create(req.body);
        res.status(201).json(Payment);

    }catch(err){
        res.status(500).json({error: err.message});
    }
}

async function getAllPayments(req, res){
    try{
        const Payment=await Payment.find();
        res.status(201).json(Order);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

async function updatePayment(req,res){
    try{
        const{id}=req.params;
        const updatePayment= await Payment.findByIdAndUpdate(id,req.body,{new:true});
        res.json(updatePayment);
        
    }catch(err){
        res.status(500).json({error:err.message});
    }
    
}async function deletePayment(req,res){
    try{
        const{id}=req.params;
        await Payment.findByIdAndRemove(id);
        res.sendStatus(204);
        
    }catch(err){
        res.status(500).json({error:err.message});
    }
    
}


module.exports={
    createPayment,
    getAllPayments,
    updatePayment,
    deletePayment,
}