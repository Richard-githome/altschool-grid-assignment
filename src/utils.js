export const range = (start, end, step = 1) => {
  let output = [];
  // solve this range utility
  // handle scenario where end is not specified range(5) - [0, 1, 2, 3, 4]
  if (end === undefined) {
    end = start;
    start = 0;
  // a conditional check for end

  for (let index = start; index < end; index += step) {
    output.push(index);
  }
  return output;
}}
