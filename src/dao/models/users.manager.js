import mongoose from 'mongoose';

const collection = 'Users';

const schema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    age:Number,
    password:String,
    role: { type: String, default: function() {
        if(this.email === "adminCoder@coder.com") {
            return "Admin";
        }
        return "Usuario";
    } }
})

const userModel = mongoose.model(collection,schema);

export default userModel;