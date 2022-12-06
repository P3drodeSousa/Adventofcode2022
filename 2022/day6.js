const input = document.querySelector("pre").textContent.trimEnd();

// Part 1
const part1 = (arr, len) => {
  let marker = 0;

  for (let i = 0; i < arr.length; i++) {
    const uniques = new Set(arr.slice(i, i + len)).size;

    if (uniques === len) {
      marker = i + len;
      break;
    }
  }
  return marker;
};

console.log(
  `Part 1 : ${part1(input.split(""), 4)} - Part 2 : ${part1(
    input.split(""),
    14
  )}`
);
