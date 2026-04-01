var arr = [
  {
    data: [
      [2, 4],
      [16, 32, 96],
    ],
    result: 3,
  },
  {
    data: [
      [3, 4],
      [24, 48],
    ],
    result: 2,
  },
  {
    data: [[2], [20, 30, 12]],
    result: 1,
  },
  {
    data: [[1], [72, 48]],
    result: 8,
  },
];

function getTotalX(a, b) {
  const debug = true;
  if (debug) console.log();
  if (debug) console.log("a", a);
  if (debug) console.log("b", b);
  // 2, 4, 6, 8, 12, 14, 16
  // 4, 8, 12, 16
  const sums = [];

  for (let i = 0; i < a.length; i++) {
    sums[i] = [];
    for (let j = a[i]; j <= b[0]; j += a[i]) {
      sums[i].push(j);
    }
  }
  if (debug) console.log("sums", sums);
  const sumsFiltered = [];
  for (let i = 0; i < sums.at(-1).length; i++) {
    let includes = true;
    for (let j = 0; j < sums.length - 1; j++) {
      if (!sums[j].includes(sums.at(-1)[i])) {
        includes = false;
        break;
      }
    }
    if (includes) sumsFiltered.push(sums.at(-1)[i]);
  }

  if (debug) console.log("sumsFiltered", sumsFiltered);

  const factors = [];
  for (let i = 0; i < sumsFiltered.length; i++) {
    let includes = true;
    for (let j = 0; j < b.length; j++) {
      //if (debug) console.log(`b[${j}]`, b[j]);
      //if (debug) console.log(`sumsFiltered[${i}]`, sumsFiltered[i]);
      if (b[j] % sumsFiltered[i] !== 0) {
        includes = false;
        break;
      }
    }
    if (includes) factors.push(sumsFiltered[i]);
  }

  if (debug) console.log("factors", factors);

  return factors.length;
}

for (t of arr) {
  const result = getTotalX(...t.data);
  console.log(result, "eq", t.result, "=>", result === t.result);
}
