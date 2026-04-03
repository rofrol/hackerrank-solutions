var testArr = [
  {
    data: [1, 1, 2, 2, 3],
    result: 1,
  },
];

function migratoryBirds(arr) {
  const debug = true;
  if (debug) console.log(arr);
  const records = [0, 0, 0, 0, 0];
  arr.forEach((e) => {
    if (debug) console.log(e);
    records[e - 1]++;
  });
  if (debug) console.log("records", records);
  let max = 1;
  records.forEach((e, i) => {
    if (debug) console.log(e);
    if (e > records[max - 1]) max = i + 1;
  });
  return max;
}

for (t of testArr) {
  const result = migratoryBirds(t.data);
  console.log(result, "eq", t.result, "=>", result === t.result);
}
