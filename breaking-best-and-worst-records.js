var arr = [
  {
    data: [3, 4, 21, 36, 10, 28, 35, 5, 24, 42],
    result: [4, 0],
  },
];

function breakingRecords(scores) {
  let min = scores[0],
    max = scores[0],
    result = [0, 0];
  for (let i of scores) {
    if (i > max) {
      max = i;
      result[0]++;
    }
    if (i < min) {
      min = i;
      result[1]++;
    }
  }
  return result;
}

for (t of arr) {
  const result = breakingRecords(t.data);
  console.log(
    result,
    "eq",
    t.result,
    "=>",
    result.every((a, i) => a[i] !== t.result[i]),
  );
}
