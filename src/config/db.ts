import {Sequelize} from "sequelize";
import { configs } from ".";
import * as dotenv from 'dotenv';
dotenv.config();
// const db_name:string = process.env.DB_NAME || ''
// const db_user = process.env.DB_USER || ''
// const db_password = process.env.DB_PASS
const db_url = process.env.DATABASE_URL || ''
export const db = new Sequelize(db_url,{...configs.dbconfig,dialect:'postgres'})

let connectDB = async () =>{
    try{
        db.authenticate()
        db.sync()  
        return {error:false,msg:'Database connected and synchonized'}
    }
    catch(e:any){
        return {error:true,msg:e}
    }
}
export default connectDB
