function rand(min, max){
    return (Math.floor(Math.pow(10,14)*Math.random()*Math.random())%(max-min+1))+min;
}
let randA = rand(1,1000000);
let randB = rand(1,1000000);
let randC = rand(1,1000000);

let boxA = 0;
let boxB = 0;
let boxC = 0;
let prize;

//console.log(`randA: ${randA}`);
//console.log(`randB: ${randB}`);
//console.log(`randC: ${randC}`);

if ((randA > randB) && (randA > randC)) {
    boxA = 1;
    prize = 'Prize in the box A';
} else if (randB > randC) {
    boxB = 1;
    prize = 'Prize in the box B';
} else if (randC > randB) {
    boxC = 1;
    prize = 'Prize in the box C';
} else {
    console.log('error');
    prize = 'Casino always wins, please reroll';
}

console.log(prize);