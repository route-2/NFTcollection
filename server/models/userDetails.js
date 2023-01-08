import mongoose from "mongoose";
const authDetailSchema = new mongoose.Schema({
    email: {type: 'string', required: true, unique: true},
    password: {type: 'string', required: true},
    name: {type: 'string', required: true},
    id: {type: 'string'},
});

const AuthDetail = mongoose.model('AuthDetail', authDetailSchema);

export default AuthDetail;