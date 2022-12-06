const input = document.querySelector("pre").textContent.trimEnd();

// Part 1
const part1 = (input) => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  for (let i = 0; i < input.length; i++) {
    let condition = [...input[i].split(" ")];
    switch (condition[0]) {
      case "forward":
        horizontal += +condition[1];
        break;
      case "up":
        depth -= +condition[1];
        break;
      default:
        depth += +condition[1];
        break;
    }
  }
  /* console.log(horizontal * depth); */
};

// Part 2
const part2 = (input) => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  for (let i = 0; i < input.length; i++) {
    let condition = [...input[i].split(" ")];

    switch (condition[0]) {
      case "forward":
        horizontal += +condition[1];
        console.log(aim);
        depth += +condition[1] * +aim;
        break;
      case "up":
        aim -= +condition[1];
        break;
      default:
        aim += +condition[1];
        break;
    }
  }

  console.log(depth * horizontal);
};

part1(input.split("\n"));
part2(input.split("\n"));
