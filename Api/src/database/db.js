import db from 'mongoose';
import config from './config';

 let dbconect = async ()=>{
await db.connect(config.mongodbURL);
console.log(db.connection.name);
}

dbconect();