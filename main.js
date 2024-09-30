console.log('Part 1');

// Description: The user provides a distance in kilometers. The program displays the distance in miles. Consider that a kilometer is 0.62 miles. 

let userNr = prompt("Input a distance in kilometers and i will tell how many miles that is!");
userNr = Number(userNr);


debugger;

if (userNr > 0) {
    let miles;
    miles = userNr * 0.62;
    miles = Number(miles);
    alert (`${userNr} km = ${miles} miles`);
} else alert ("Distance must be greater than 0!");

