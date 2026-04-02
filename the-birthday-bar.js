var arr = [
  {
    data: { s: [2, 2, 1, 3, 2], d: 4, m: 2 },
    result: 2,
  },
  {
    data: { s: [1, 2, 1, 3, 2], d: 3, m: 2 },
    result: 2,
  },
  {
    data: { s: [1, 1, 1, 1, 1, 1], d: 3, m: 2 },
    result: 0,
  },
  {
    data: { s: [4], d: 4, m: 1 },
    result: 1,
  },
];

function birthday(s, d, m) {
  const debug = false;
  if (debug) console.log(s, d, m);
  let count = 0;
  for (let i = 0; i < s.length - m + 1; i++) {
    if (debug) console.log();
    let sum = 0;
    for (let j = i; j < i + m; j++) {
      if (debug) console.log(s[j]);
      sum += s[j];
      if (sum > d) break;
    }
    //if (debug) console.log("sum eq d", sum, "eq", d, "=>", sum === d);
    if (sum === d) count++;
  }
  return count;
}

for (t of arr) {
  const result = birthday(...Object.values(t.data));
  console.log(result, "eq", t.result, "=>", result === t.result);
}
