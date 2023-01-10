import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email: {type: 'string', required: true},
    password: {type: 'string', required: true},
    name: {type: 'string', required: true},
    id: {type: 'string'},
});

 

export default mongoose.model('User', userSchema);