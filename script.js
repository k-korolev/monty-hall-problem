function game(rounds) {

    let win = 0;
    let lose = 0;
    let tie = 0;

    for (let i = 0; i < rounds; i++) {

        // Random generator
        function rand(min, max){
            return (Math.floor(Math.pow(10,14)*Math.random()*Math.random())%(max-min+1))+min;
        }



        // Setting prize to a box
        let randA = rand(1,1000000);
        let randB = rand(1,1000000);
        let randC = rand(1,1000000);
        //let randC = 0;
    
        let prizeBox = 0;
        let prize;
    
        if ((randA > randB) && (randA > randC)) {
            prizeBox = 1;
            prize = 'Prize in the box A';
        } else if (randB > randC) {
            prizeBox = 2;
            prize = 'Prize in the box B';
        } else if (randC > randB) {
            prizeBox = 3;
            prize = 'Prize in the box C';
        } else {
            prize = 'Casino always wins, please reroll';
        }
    
    

        // Users picks a box
        let user1A = rand(1,1000000);
        let user1B = rand(1,1000000);
        let user1C = rand(1,1000000);
        //let user1C = 0;
    
        let userPickBox = 0;
        let userPick; 

        if ((user1A > user1B) && (user1A > user1C)) {
            userPickBox = 1;
            userPick = 'User picks box A';
        } else if (user1B > user1C) {
            userPickBox = 2;
            userPick = 'User picks box B';
        } else if (user1C > user1B) {
            userPickBox = 3;
            userPick = 'User picks box C';
        } else {
            userPick = 'Please reroll';
        }
        


        // did user win?

        //console.log(prize);
        //console.log(userPick);
        if ((prizeBox > 0) && (userPickBox > 0)) {
            if (prizeBox === userPickBox) {
                win++;
                //console.log('you win!');
            } else {
                lose++;
                //console.log('you lose');
            }
        } else {
            i--;
            tie++;
        }

    }
    
    console.log ('Total rounds: ' + (win + lose) + ', Wins: ' + win + ', Loses: ' + lose + ', Ties (do not count): ' + tie);
    console.log('Win rate: ', (win / (win + lose)) * 100, '%');
}

let test = game(1000000);