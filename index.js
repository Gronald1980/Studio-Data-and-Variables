// FORK this starter file and save it to your own Repl.it account.

const input = require('readline-sync');

// Bonus mission - Take in user input - take in astronaut count
let astronautCount = input.question("What is the astronaut count?");
astronautCount = Number(astronautCount);

// Declare and initialize the 12 variables here:
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
// let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = 1;
let weatherStatus = "clear";






// Write code to generate the LC04 report here:

let theLine = "-------------------------------------"

console.log("-------------------------------------");
console.log("> LC04 - LAUNCH CHECKLIST");
console.log("-------------------------------------");
console.log("Date: " + date);
console.log("Time: " + time);
console.log()
console.log(theLine);
console.log("> ASTRONAUT INFO");
console.log(theLine);
console.log("* count: " + astronautCount);
console.log("* status: " + astronautStatus);
console.log();
console.log(theLine);
console.log("> FUEL DATA");
console.log(theLine);
console.log("* Fuel temp celsius: " + fuelTempCelsius + " C");
console.log("* Fuel level: " + (fuelLevel * 100) + "%")
console.log()
console.log(theLine)
console.log("> MASS DATA")
console.log(theLine)
console.log("* Crew mass: " + crewMassKg + " kg")
console.log("* Fuel mass: " + fuelMassKg + " kg")
console.log("* Shuttle mass: " + shuttleMassKg + " kg")
console.log("* Total mass: " + totalMassKg + " kg")
console.log()
console.log(theLine)
console.log("> FLIGHT PLAN")
console.log(theLine)
console.log("*weather: " + weatherStatus)
console.log()
console.log(theLine)
console.log("> OVERALL STATUS")
console.log(theLine)
console.log("* Clear for takeoff: YES")
/*-------------------------------------
> LC04 - LAUNCH CHECKLIST
-------------------------------------
Date: Monday 2019-03-18
Time: 10:05:34 AM

-------------------------------------
> ASTRONAUT INFO
-------------------------------------
* count: 7
* status: ready

-------------------------------------
> FUEL DATA
-------------------------------------
* Fuel temp celsius: -225 C
* Fuel level: 100%

-------------------------------------
> MASS DATA
-------------------------------------
* Crew mass: 564.9 kg
* Fuel mass: 760000 kg
* Shuttle mass: 74842.31 kg
* Total mass: 835407.21 kg

-------------------------------------
> FLIGHT PLAN
-------------------------------------
* weather: clear

-------------------------------------
> OVERALL STATUS
-------------------------------------
* Clear for takeoff: YES

*/









// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.