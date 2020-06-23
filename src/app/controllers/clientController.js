const Client = require('../models/Client');
const User = require('../models/User');

class ClientController{

   async store(req,res){
       try {
        const {birthday,telephone,address} = req.body;
        const {id} = req.payload;
        let user = await User.findOne({attributes :['id'], where : {id}});
        if(!user){
        return res.status(404).json({ error: 'User Not Found'});
        }
        let client = await Client.findOne({where : {user_id : id}})
        if(!client){
            client = await Client.create({telephone,address,user_id : id})
            return res.status(200).json(client)
        } 
        return res.status(403).json({ error: 'Client is already registed',})
       } catch (error) {
           console.log(error)
           return res.status(400).json(error);
       }       
    }

    async update(req,res){
        try {
            const {birthday,telephone,address} = req.body;
            const {id} = req.payload;
            console.log(id)
            let client = await Client.findOne({attributes:['telephone','address','birthday','deleted'],where : {user_id : id}});
            if(!client){
                return res.status(404).json({error : 'Client Not Found'})         
            } 
            if(telephone)
                client.telephone = telephone;
            if(address)
                client.address = address;    
            return res.status(200).json(client)
           } catch (error) {
               console.log(error)
               return res.status(400).json(error);
           }       
        }
    
    async index(req,res){
        try {
        const client = await Client.findAll({attributes:['telephone','address','birthday','deleted'],include:{association : 'owner',attributes: ['name','email','permition']}});
            return res.status(200).json(client);
        } catch (error) {
           return res.status(400).json(error);
        }
    }
    async show(req,res){
        try {
            const {id} = req.params
            const client = await Client.findOne({where : {user_id : id} ,attributes:['telephone','address','birthday','deleted'],include:{association : 'owner',attributes: ['name','email','permition']}});
            if(!client){
                return res.status(404).json({error : 'Client Not Found'});
            }
            return res.status(200).json(client);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async destroy(req,res){
        try {
            const { id } = req.params;
            const client = await Client.findOne({attributes:['user_id','id'],where:{user_id:id}});
            if (!client) {
              return res.status(404).json({ error: 'Client No Found' });
            }
            client.deleted = true;
            await client.save();
            const user = await User.findByPk(id);
            await user.destroy();
            return res.status(200).json({ message: 'Client deleted' });
          } catch (error) {
              console.log(error);
            return res.status(400).json(error);
          }
    }
}


module.exports = ClientController;