// Methods that iterate over an array.
// Method that Do not the original array. (Inmutables)

const multipleoffive = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const firtsNumberGreaterThanTen = multipleoffive.find((number) => number > 10);

console.log(multipleoffive);
console.log(firtsNumberGreaterThanTen); // 15

// findIndex

const RamdonNumbers = [12, 23, 31, 45, 57, 66, 75, 83, 92];
const indexNumbers = RamdonNumbers.findIndex((number) => number > 60);

console.log(RamdonNumbers);
console.log(indexNumbers);

// Exercise: Raffle Winner Verification Program

const winningParticipants = [
  { id: 1, name: "Jennifer", ticketNumber: 1 },
  { id: 8, name: "Michael", ticketNumber: 8 },
  { id: 15, name: "Emily", ticketNumber: 15 },
  { id: 47, name: "Charlie", ticketNumber: 47 },
];

function findWinnerByName(name) {
  const winner = winningParticipants.find(
    (participants) => participants.name === name
  );
  return winner || "No winner found with that name";
}


/**
 * Finds a winner by their ticket number.
 *
 * @param {number} ticketNumber - The ticket number to search for.
 * @returns {Object|string} The winning participant object if found, otherwise a message indicating no winner was found.
 */
function findWinnerByTicketNumber(ticketNumber) {
  const index = winningParticipants.findIndex(
    (participants) => participants.ticketNumber === ticketNumber
  );
  return index !== -1
    ? winningParticipants[index]
    : "No winner found with that ticket number";
}

function displayWinnerInformation(winner){
  if(winner !== undefined && winner != null && winner !== 'No winner found with that name.'){
    console.log('Winner Information: ', winner);
  } else {
    console.log('No winner found.');
  }
}

const winnerByName = findWinnerByName('Michael');
const indexWinnerByTicketNumber = findWinnerByTicketNumber(8);

displayWinnerInformation(winnerByName);
console.log('Index of winner by ticket number: ', indexWinnerByTicketNumber); // 
