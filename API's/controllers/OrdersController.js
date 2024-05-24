
const Order = require('../models/orders');


async function createOrder(req,res){
    try{
        const order=await Order.create(req.body);
        res.status(201).json(order);

    }catch(err){
        res.status(500).json({error: err.message});
    }
}

async function getAllOrders(req, res){
    try{
        const Order=await Order.find();
        res.status(201).json(Order);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

async function updateOrder(req,res){
    try{
        const{id}=req.params;
        const updateOrder= await Order.findByIdAndUpdate(id,req.body,{new:true});
        res.json(updateOrder);
        
    }catch(err){
        res.status(500).json({error:err.message});
    }
    
}async function deleteOrder(req,res){
    try{
        const{id}=req.params;
        await Order.findByIdAndRemove(id);
        res.sendStatus(204);
        
    }catch(err){
        res.status(500).json({error:err.message});
    }
    
}


module.exports={
    createOrder,
    getAllOrders,
    updateOrder,
    deleteOrder,
}