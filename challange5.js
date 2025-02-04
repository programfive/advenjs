function organizeShoes(shoes) {
  let response = [];
  const left = shoes
    .filter((items) => items.type === 'I')
    .map((items) => items.size)
    .sort();
  const right = shoes
    .filter((items) => items.type === 'R')
    .map((items) => items.size)
    .sort();
  if (left.length >= right.length) {
    response = right.filter(function (tag) {
      return left.includes(tag);
    });
  } else {
    response = left.filter(function (tag) {
      return right.includes(tag);
    });
  }

  return response;
}
const shoes = [
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
];

const response = organizeShoes(shoes);
console.log(response);
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 38 },
];
// [38, 38]
// const response = organizeShoes(shoes2);
// console.log(response);
const shoes3 = [
  { type: 'I', size: 41 },
  { type: 'I', size: 41 },
  { type: 'I', size: 41 },
];
// const response = organizeShoes(shoes3);
// console.log(response);
