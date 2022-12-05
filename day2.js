const input = document.querySelector("pre").textContent;
const score1 = {
  "A Z": 3,
  "B X": 1,
  "C Y": 2, // Losses
  "A X": 4,
  "B Y": 5,
  "C Z": 6, // Ties
  "A Y": 8,
  "B Z": 9,
  "C X": 7, // Wins
};
const score2 = {
  "A Y": 4,
  "B X": 1,
  "C Z": 7, // Rock
  "A Z": 8,
  "B Y": 5,
  "C X": 2, // Paper
  "A X": 3,
  "B Z": 9,
  "C Y": 6, // Scissor
};

const answers = input
  .trim()
  .split("\n")
  .map((row) => [score1[row], score2[row]])
  .reduce((acc, a) => [acc[0] + a[0], acc[1] + a[1]]);

console.log(`Part 1: ${answers[0]}\nPart 2: ${answers[1]}`);
