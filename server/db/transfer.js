const mongoose = require('mongoose');
const validator = require('validator')

const transferSchema = new mongoose.Schema({
        sender:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'User'
        },
        reciever:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'User'
        },
        amount:{
                type:Number,
                required:true,
                validator(value){
                        if(value < 0){
                                throw new Error('Invalid transfer amount!');
                        }
                }
        }
},{
        timestamps:true
});

const Transfer = new mongoose.model('Transfer',transferSchema);

module.exports = Transfer