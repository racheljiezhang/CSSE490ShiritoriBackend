class Room {
    constructor(code, socket){
        this.code = code;
        this.socket0 = socket;
        this.socket1 = null;
        this.round = 0;
        this.inGame = false;
    }

    newGame() {
        this.inGame = true;
        return this.round;
    }

    nextTurn(){
        this.round++;
        return this.round;
    }

    addToWordsList(word){
        if(this.round % 2 === 0){
            this.socket0.words.push(word)
        }
        else{
            this.socket1.words.push(word)
        }
    }

    checkIfWordExists(word){
        if(this.socket0.words.indexOf(word) > -1){
            return true;
        }
        if(this.socket1.words.indexOf(word) > -1){
            return true;
        }
        return false;
    }

    isFull() {
        return this.socket0 != null && this.socket1 != null;
    }

    getNames() {
        var names = [];
        names.push(this.socket0);
        names.push(this.socket1);
        return names;
    }

    joinRoom(socket) {
        this.socket1 = socket;
    }

    leaveRoom(socket) {
        this.inGame = false;
        if(this.socket0 && this.socket0.name === socket.name){
            this.socket0 = null;
        }
        else{
            this.socket1 = null;
        }
        return;
    }

    getCode() {
        return this.code;
    }

    getSockets(){
        var sockets = [];
        sockets.push(this.socket0);
        sockets.push(this.socket1);
        return sockets;
    }

    isEmpty() {
        if(this.socket0 === null){
            if(this.socket1 === null){
                return true;
            }
        }
        return false;
    }
}


module.exports = {
    Room
}