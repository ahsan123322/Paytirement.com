import mongoose from "mongoose";

export const connecTMongodb =  async  () =>{
    if(mongoose.connection.readyState === 1){
        return mongoose.connection.asPromise();
    }
     return await mongoose.connect('mongodb+srv://umartkd989:paytirement@paytirment.fsymuds.mongodb.net/?retryWrites=true&w=majority&appName=paytirment')
}
