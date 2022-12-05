const input = document.querySelector("pre").textContent.trim().split("\n");

// Part 1
const part1 = (input) => {
  return input
    .map((item) => {
      const [begin1, end1, begin2, end2] = item.split(/[-,]/).map(Number);
      return (
        (begin1 >= begin2 && end1 <= end2) || (begin2 >= begin1 && end2 <= end1)
      );
    })
    .reduce((acc, total) => acc + total, 0);
};

const part2 = (input) => {
  return input
    .map((item) => {
      const [begin1, end1, begin2, end2] = item.split(/[-,]/).map(Number);
      return !(begin1 > end2 || begin2 > end1);
    })
    .reduce((acc, total) => acc + total, 0);
};

console.log(`Part 1 : ${part1(input)} - Part 2 : ${part2(input)}`);
