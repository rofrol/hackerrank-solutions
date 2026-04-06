var testArr = [
  {
    data: { keyboards: [40, 50, 60], drives: [5, 8, 12], b: 60 },
    expected: 58,
  },
  {
    data: { keyboards: [3, 1], drives: [5, 2, 8], b: 10 },
    expected: 9,
  },
];

function getMoneySpent(keyboards, drives, b) {
  const debug = true;
  if (debug) console.log(keyboards, drives, b);
  let max = -1;
  keyboards.forEach((k) => {
    drives.forEach((d) => {
      const newMax = k + d;
      if (newMax <= b && newMax > max) max = newMax;
    });
  });
  return max;
}

for (t of testArr) {
  const expected = getMoneySpent(...Object.values(t.data));
  console.log(expected, "eq", t.expected, "=>", expected === t.expected);
}
