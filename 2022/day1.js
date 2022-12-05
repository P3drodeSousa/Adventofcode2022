const input = document.querySelector("pre").textContent;

function calories(input) {
  // Part 1
  const part_1 = Math.max(
    ...input.split("\n\n").map((str) =>
      str.split("\n").reduce((previous, current) => {
        return +current + +previous;
      }, 0)
    )
  );

  // Part 2
  const part_2 = input
    .split("\n\n")
    .map((str) =>
      str.split("\n").reduce((previous, current) => {
        return +current + +previous;
      }, 0)
    )
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((previous, current) => {
      return +current + +previous;
    }, 0);

  console.log(`part_1 : ${part_1} ; part_2 : ${part_2}`);
}

console.log(calories(input));
