const input = document.querySelector("pre").textContent.trimEnd();

// Part 1
const part1 = (input) => {
  let gammaBits = [];
  let epsilonBits = [];
  for (let i = 0; i < input[0].length; i++) {
    let count0 = 0;
    let count1 = 0;
    for (let j = 0; j < input.length; j++) {
      if (input[j][i] === "0") {
        count0++;
      } else {
        count1++;
      }
    }

    gammaBits[i] = count0 > count1 ? 0 : 1;
    epsilonBits[i] = count0 > count1 ? 1 : 0;
  }

  const gamma = parseInt(gammaBits.join(""), 2);
  const epsilon = parseInt(epsilonBits.join(""), 2);
  console.log(gamma * epsilon);
  /*  return gamma * epsilon; */
};

// Part 2
function part2(input) {
  const oxygenGeneratorRating = calculateRating(input, true);
  const co2ScrubberRating = calculateRating(input, false);

  console.log(oxygenGeneratorRating * co2ScrubberRating);
  return oxygenGeneratorRating * co2ScrubberRating;
}

function calculateRating(input, isOxygenGeneratorRating) {
  for (let i = 0; i < input[0].length && input.length > 1; i++) {
    let count0 = 0;
    let count1 = 0;

    for (let j = 0; j < input.length; j++) {
      if (input[j][i] === "0") {
        count0++;
      } else {
        count1++;
      }
    }

    let criteria;
    if (isOxygenGeneratorRating) {
      criteria = count0 > count1 ? 0 : 1;
    } else {
      criteria = count0 > count1 ? 1 : 0;
    }

    input = input.filter((x) => x[i] === criteria.toString());
  }

  return parseInt(input[0], 2);
}

part1(input.split("\n"));
part2(input.split("\n"));
