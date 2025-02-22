import { connect } from "mongoose"

export const dbConnect = async()=>{
    const mongoUri = process.env.MONGO_URI
    try {
        
        console.log("🚀 ~ dbConnect ~ connecting>>>>>>>>>>>:")
        await connect(String(mongoUri).trim())
    } catch (error:any) {
        console.log("!!!! db connection lost !!!!")
        console.log(error.message);
        process.exit(1)
    }
}