const input = document.querySelector("pre").textContent;

// Part 1

const part1 = (input) => {
  let test = input
    .map((num, i) => {
      if (i === 0) return;
      return +input[i] > +input[i - 1] ? +input[i] : null;
    })
    .filter(Boolean).length;

  console.log(test);
};

const part2 = (arr) => {
  let change = -1;
  let prevSum = 0;
  for (let i = 2; i < arr.length; i++) {
    let sum = +arr[i] + +arr[i - 1] + +arr[i - 2];
    if (sum > prevSum) change++;
    prevSum = sum;
  }
  console.log(change);
};
/* part1(input.split("\n")); */
part2(input.split("\n"));

function calc(arr) {
  return arr.reduce((previous, current) => {
    return +current + +previous;
  }, 0);
}
