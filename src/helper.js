export function randomChildren(max, limit) {
  let numbers = [];

  do {
    let random = Math.floor(Math.random() * (max + 1));
    numbers.indexOf(random) === -1 && numbers.push(random);
  } while (numbers.length < limit);

  return numbers;
}

export function sortArrayByChild(array, child) {
  return array.sort((a, b) => b[child] - a[child])[0];
}
