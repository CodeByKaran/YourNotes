import mongoose from 'mongoose'


const dbConnect=async()=>{
    try{
        const instance = await mongoose.connect(`mongodb+srv://karan:kkaknk007@cluster0.lhrgtj6.mongodb.net/NoteApp`)
        console.log(`Db connected Succcesfully ${instance.connection.host}`);
    }catch(err){
        console.log("Error:",err);
        process.exit(1)
    }
}


export default dbConnect;
