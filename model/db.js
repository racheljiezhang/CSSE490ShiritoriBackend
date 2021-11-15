const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://user1:12345@cluster0.19aae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const db=mongoose.connection;
db.once('open',()=>{
    console.log('connected');
})
db.on('error',console.error.bind(console,"connection error"))

function getDb(){
    return mongoose;
}

module.exports={getDb}