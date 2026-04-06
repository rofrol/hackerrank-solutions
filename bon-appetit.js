var testArr = [
  {
    data: { bill: [3, 10, 2, 9], k: 1, b: 12 },
    result: 5,
  },
  {
    data: { bill: [3, 10, 2, 9], k: 1, b: 7 },
    result: "Bon Appetit",
  },
];

function bonAppetit(bill, k, b) {
  const debug = false;
  if (debug) console.log(bill, k, b);
  const sum = bill.reduce((acc, curr) => ((acc += curr), acc));
  const result = b === (sum - bill[k]) / 2 ? "Bon Appetit" : bill[k] / 2;
  console.log(result);
  return result;
}

for (t of testArr) {
  const result = bonAppetit(...Object.values(t.data));
  console.log(result, "eq", t.result, "=>", result === t.result);
}
