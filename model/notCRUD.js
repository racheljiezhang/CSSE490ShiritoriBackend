const { get } = require('mongoose');
const { Game } = require('./schema.js');

async function addGame(winner, user0, user1, round, words0, words1) {
    const user = new Game({winner, user0, user1, round, words0, words1});
    const res = await user.save();
    return res;
}

async function getLeader(){
    var sorter = { round: -1 };
    const topTen = await Game.find().sort(sorter).limit(10);
    return topTen;
} 

module.exports= {
    addGame,
    getLeader
}