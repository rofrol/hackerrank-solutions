var arr = [
  {
    data: { k: 5, ar: [1, 2, 3, 4, 5, 6] },
    result: 3,
  },
];

function divisibleSumPairs(n, k, ar) {
  const debug = false;
  if (debug) console.log(n, k, ar);
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    if (debug) console.log();
    if (debug) console.log(ar[i]);
    for (let j = i + 1; j < n; j++) {
      if (debug) console.log(ar[j]);
      if ((ar[i] + ar[j]) % k === 0) {
        if (debug) console.log("found");
        count++;
      }
    }
  }
  return count;
}

for (t of arr) {
  const result = divisibleSumPairs(t.data.ar.length, ...Object.values(t.data));
  console.log(result, "eq", t.result, "=>", result === t.result);
}
