import { randomChildren, sortArrayByChild } from './helper';

test(`should return an array with 3 random numbers between 0 and 10`, () => {
  const randomArray = randomChildren(10, 3);

  expect(randomArray.length).toBe(3);
  expect(randomArray.indexOf(11)).toBe(-1);
  expect(randomArray.indexOf(-1)).toBe(-1);
  expect(randomArray.filter(r => r > 10 || r < 0).length).toBe(0);
});

test(`should return the sorted array by its children's highest value`, () => {
  const array = [{ name: 'tolga', age: 30 }, { name: 'alp', age: 50 }];
  const sortedArray = sortArrayByChild(array, 'age');

  expect(sortedArray).toEqual({ name: 'alp', age: 50 });
});
