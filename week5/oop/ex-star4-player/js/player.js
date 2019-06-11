class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
}

let messi = new Player("messi");
function play(player) {
    let random =Math.floor(Math.random()* 10)+1 ;
    if (random % 2 === 0){
        player.score++;
    }
}
function startPlay(player,times){
    for (let i = 1 ; i < times ; i++){
        play(player);
    } 
}
startPlay(messi, 3);
console.log(messi.score);