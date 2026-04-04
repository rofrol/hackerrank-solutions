var testArr = [
  {
    data: 2017,
    result: "13.09.2017",
  },
];

function dayOfProgrammer(year) {
  const debug = true;
  if (debug) console.log(year);
  return;
}

for (t of testArr) {
  const result = dayOfProgrammer(t.data);
  console.log(result, "eq", t.result, "=>", result === t.result);
}
