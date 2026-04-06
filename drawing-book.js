var testArr = [
  {
    data: [5, 3],
    expected: 1,
  },
  {
    data: [6, 2],
    expected: 1,
  },
  {
    data: [5, 4],
    expected: 0,
  },
  {
    data: [8, 7],
    expected: 1,
  },
  {
    data: [8, 3],
    expected: 1,
  },
];

function pageCount(n, p) {
  const debug = true;
  if (debug) console.log(n, p);
  // _ 1 | 2 3 | 4 5
  // _ 1 | 2 3 | 4 5 | 6 _
  // _ 1 | 2 3 | 4 5 | 6 7 | 8
  const n2 = Math.floor(n / 2) + 1;
  let p2 = Math.floor(p / 2) + 1;
  if (debug) console.log(n2, p2);
  if (p2 <= n2 / 2) {
    p2 = n2 - p2 + 1;
    if (debug) console.log(n2, p2);
  }
  return n2 - p2;
}

for (t of testArr) {
  const expected = pageCount(...t.data);
  console.log(expected, "eq", t.expected, "=>", expected === t.expected);
}
