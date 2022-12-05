const input = document.querySelector("pre").textContent.trim().split("\n");

// ALPHABET ARR [a-z,A-Z]
let listScore = [...Array(26)]
  .map((_, i) => String.fromCharCode(i + 97))
  .concat(
    [...Array(26)].map((_, i) => String.fromCharCode(i + 97).toUpperCase())
  );

// PART 1
const part1 = (input) => {
  let letters = input.map((word) => {
    let firstPart = [...word.slice(0, word.length / 2)];
    let secondPart = [...word.slice(word.length / 2)];

    return firstPart.filter((letter) => secondPart.includes(letter));
  });
  return reduceArr(letters);
};

// Part 2
const part2 = (input) => {
  let letters = [];

  for (let i = 0; i < input.length; i += 3) {
    letters.push(
      input[i].split("").filter((letter) => {
        return input[i + 1].includes(letter) && input[i + 2].includes(letter);
      })
    );
  }

  return reduceArr(letters);
};

function reduceArr(arr) {
  return arr.reduce((previous, current) => {
    return listScore.indexOf(current[0]) + 1 + previous;
  }, 0);
}

console.log(`Part 1 : ${part1(input)} - Part 2 : ${part2(input)}`);
