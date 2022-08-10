import db from 'mongoose';


 let dbcconect = async ()=>{
await db.connect('mongodb://localhost/polarincloud');
console.log(db.connection.name);
}

dbcconect();