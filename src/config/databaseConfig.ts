import mongoose from "mongoose";

export const createDbConection = (dbURL: string)=> {
    mongoose.connect(dbURL)
    .then(()=>console.log('connected'))
    .catch((err)=>console.log('error on connection'));

    mongoose.connection.on('error',()=>console.log('Error on db connection'));
    mongoose.connection.once('open',()=>console.log('db connected'));
};