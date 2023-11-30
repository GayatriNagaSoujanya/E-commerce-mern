import mongoose from 'mongoose';


export const Connection = async(username,password) => {
    const URL=`mongodb://${username}:${password}@ac-9fy4b9b-shard-00-00.zeiywfe.mongodb.net:27017,ac-9fy4b9b-shard-00-01.zeiywfe.mongodb.net:27017,ac-9fy4b9b-shard-00-02.zeiywfe.mongodb.net:27017/PROJECT 0?ssl=true&replicaSet=atlas-w0x88g-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{ useUnifiedTopology:"true",useNewUrlParser:"true"});
        console.log("MongoDb created...");
    } catch (error) {
        console.log('Error while connecting the database',error.message)
    }
}


export default Connection;