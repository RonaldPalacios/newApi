import db from 'mongoose';


 (async ()=>{
await db.connect('mongodb://localhost/polarincloud');
console.log(db.connection.name);
})

();