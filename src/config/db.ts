import {Sequelize} from "sequelize";
import { configs } from ".";
import * as dotenv from 'dotenv';
dotenv.config();
// const db_name:string = process.env.DB_NAME || ''
// const db_user = process.env.DB_USER || ''
// const db_password = process.env.DB_PASS || ""
// const db_host = process.env.DB_HOST
// const db_port = process.env.DB_PORT || "" 
const DB_URL = process.env.DATABASE_URL|| ''
export const db = new Sequelize(DB_URL,{
    dialect:'postgres',
    dialectOptions:{
        ssl:{
            rejectUnauthorized: false
        }
    }
})

let connectDB = async () =>{
    try{
        await db.authenticate()
        await db.sync()  
        return {error:false,msg:'Database connected and synchonized'}
    }
    catch(e:any){
        return {error:true,msg:e}
    }
}
export default connectDB
