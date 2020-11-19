const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = new mongoose.Schema({
        firstName:{
                type: String,
                trim: true,
                validate(value){
                    if(value === '')
                        throw new Error('First name cant be empty!');
                    if(!validator.isAlpha(value))
                        throw new Error('First name cant have special characters!');
                }
            },
            lastName:{
                type: String,
                trim: true,
                validate(value){
                    if(value === '')
                        throw new Error('Last name cant be empty!');
                    if(!validator.isAlpha(value))
                        throw new Error('Last name cant have special characters!');
                }
            },
            userName:{
                type: String,
                validate(value){
                    if(value.length < 4)
                        throw new Error('Username is too short');
                    if(value === 'Anonymous')
                        throw new Error("Cant use 'Anonymous' as username!");
                }
            },
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