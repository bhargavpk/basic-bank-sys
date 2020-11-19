const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = new mongoose.Schema({
        firstName:String,
        lastName:String,
        userName:String,
        balance:{
                type:Number,
                default:0,
                validator(value){
                        if(value < 0){
                                throw new Error('Invalid balance!');
                        }
                }
        },
        email:{
                type:String,
                validator(value){
                        if(!validator.isEmail(value)){
                                throw new Error('Invalid mail id!');
                        }
                }
        }
})


const User = new mongoose.model('User',userSchema);

module.exports = User;