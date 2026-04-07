var testArr = [
  {
    data: [1, 2, 3],
    expected: "Cat B",
  },
  {
    data: [1, 3, 2],
    expected: "Mouse C",
  },
];

function catAndMouse(x, y, z) {
  const debug = true;
  if (debug) console.log(x, y, z);
  const cat1 = Math.abs(z - x);
  const cat2 = Math.abs(z - y);
  if (debug) console.log(cat1, cat2);
  return cat1 === cat2 ? "Mouse C" : cat1 < cat2 ? "Cat A" : "Cat B";
}

for (t of testArr) {
  const expected = catAndMouse(...t.data);
  console.log(expected, "eq", t.expected, "=>", expected === t.expected);
}
