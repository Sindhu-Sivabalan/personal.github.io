// Function to generate random numbers between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to check if the repeated summation of numbers results in 1 or 2
  function checkSum(numbers) {
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    while (sum >= 10) {
      const digits = sum.toString().split('').map(Number);
      sum = digits.reduce((acc, num) => acc + num, 0);
    }
    return sum === 1 || sum === 2;
  }
  
  // Function to generate a random combination based on the rules
  function generateRandomCombination() {
    const lowOddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const highOddNumbers = [21, 23, 25, 27, 29, 31, 33, 35, 37, 39];
    const lowEvenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    const highEvenNumbers = [22, 24, 26, 28, 30, 32, 34, 36, 38];
  
    const lo1 = lowOddNumbers[getRandomNumber(0, lowOddNumbers.length - 1)];
    const lo2 = lowOddNumbers[getRandomNumber(0, lowOddNumbers.length - 1)];
    const ho = highOddNumbers[getRandomNumber(0, highOddNumbers.length - 1)];
    const le1 = lowEvenNumbers[getRandomNumber(0, lowEvenNumbers.length - 1)];
    const he = highEvenNumbers[getRandomNumber(0, highEvenNumbers.length - 1)];
    const le2 = lowEvenNumbers[getRandomNumber(0, lowEvenNumbers.length - 1)];
  
    const combination = [lo1, lo2, ho, le1, he, le2];
  
    // Check if the combination is unique, has no repeated numbers, and the repeated summation results in 1 or 2
    if (
      (new Set(combination)).size === combination.length &&
      checkSum(combination)
    ) {
      return combination;
    } else {
      // If the combination does not meet the rules, generate a new one recursively
      return generateRandomCombination();
    }
  }
  
  // Function to display the next combination on button click
  function showNextCombination() {
    const combinationsContainer = document.getElementById("combinations-container");
    combinationsContainer.textContent = ""; // Clear previous content
  
    const combination = generateRandomCombination();
    const combinationText = `Combination: ${combination.join(', ')}\n`;
    combinationsContainer.textContent = combinationText;
  }
  
  // Attach event listener to the "Next" button
  document.getElementById("next-btn").addEventListener("click", showNextCombination);
  
  // Show the first combination initially
  showNextCombination();
  
  
   
  
  
