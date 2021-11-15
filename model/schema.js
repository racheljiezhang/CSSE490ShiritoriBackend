const mongoose =require('./db.js').getDb();

const gameSchema=new mongoose.Schema({
    winner:String,
    user0:String,
    user1:String,
    round:{
        type:Number,
        default:0
    },
    words0:Array,
    words1:Array
})

const Game=mongoose.model('game', gameSchema)

module.exports={
    Game
}