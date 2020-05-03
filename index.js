// import dependency
let readlineSync = require('readline-sync');

// declaring variables 
uberOptions = ['Realize it\'s karma for ditching your grandma and you Uber back home', 'Commit to the bottomless mimosas and get another Uber to Copper Blues']


// opening - get to know player 
let playerName = readlineSync.question(`Hi. What's your name? `);

// introduction to game
console.log(`Hi ${playerName}. So... quarantine is over and you're trying to make up for lost time.
Your friends invited you to Copper Blues but it's kind of a mission - will you make it before they leave to Centro?`);

//press enter to start 
readlineSync.question(`Press enter to start.`);

//adventure starts
let playerAge = readlineSync.question(`Oops! Totally forgot to ask, how old are you? No point in playing if you can't even get in! `)
    if (playerAge >= 21) {
        readlineSync.question(`Great! Press enter again.`)
    } else {
        console.log(`:( Sucks. Game over.)`)
    }

// question 1 
let q1 = readlineSync.keyInYN(`You're at home getting ready and your grandma comes over. She asks
you to sit and have a cup of coffee with her. Do you?`)
    if (q1 === false) {
        readlineSync.question(`You pretended you were sick! Nice. Press enter to continue.`)
    } else {
        console.log(`You're not going anywhere. Game over.`) //ITS SUPPOSED TO END!!! WHAT!! 
        process.exit();
    };

//question 2
let q2 = readlineSync.keyInYN(`New problem: since grandma thinks your sick, you can't leave your room. Read: you can't leave through the front door. Your only option is the window.
Do you jump out?`)
    if (q2 === true) {
        readlineSync.question(`Good choice. You were only on the first floor anyway. Press enter to continue.`)
    } else {
        console.log(`You can go ahead and take your shoes off and put your PJs on. Game over.`)
        process.exit();
    };

//question 3 
let q3 = readlineSync.keyInYN(`You called an Uber and were able to get in undetected. Your uber driver starts driving a little reckless and they slam into the person in front of them. What do you do? Do you 1. Realize it's karma for ditching your grandma and Uber back home, or 2. Commit to the bottomless mimosas and get another Uber to Copper Blues. Press N for option 1 or press Y for option 2.`)
        if (q3 === true) {
            readlineSync.question(`Amazing! Gotta love the dedication. Press enter to continue.`)
        } else {
            console.log(`It's okay, you had a rough day. You'll try again next week. (... Game over.)`)
            process.exit();
        }

//question 4
let q4 = readlineSync.keyInYN(`You get to Copper Blues and realize you left your wallet in the first uber and don't have your ID on you. Do you 1. Just go home, or 2. Create a distraction and sneak in. Press N for option 1 or press Y for option 2.`)
        if (q4 === true) {
            readlineSync.question(`Congratulations! You got to the table just as your friends ordered a bottle. You most definitely deserve this. Have fun!`)
            process.exit();
        } else {
            console.log(`:( Game over.`)
            process.exit();
        }