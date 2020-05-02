// import dependency
let readlineSync = require('readline-sync');

// declaring variables 



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
        console.log(`You're not going anywhere. Game over.`)
    };

//question 2
let q2 = readlineSync.keyInYN(`New problem: since grandma thinks your sick, you can't leave your room. Read: you can't leave through the front door. Your only option is the window.
Do you jump out?`)
    if (q2 === true) {
        readlineSync.question(`Good choice. You were only on the first floor anyway. Press enter to continue.`)
    } else {
        console.log(`You can go ahead and take your shoes off and put your PJs on. Game over.`)
    };

//question 3
let q3 = readlineSync.keyInYN(`You called an Uber and were able to get in undetected. Your uber driver starts driving a little reckless and they slam into the person in front of them. What do you do?`)
    