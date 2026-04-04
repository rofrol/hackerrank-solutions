var testArr = [
  {
    data: { day: 256, year: 2017 },
    result: "13.09.2017",
  },
  {
    data: { day: 256, year: 2016 },
    result: "12.09.2016",
  },
  {
    data: { day: 256, year: 1800 },
    result: "12.09.1800",
  },
  {
    data: { day: 256, year: 2000 },
    result: "12.09.2000",
  },
  {
    data: { day: 32, year: 1918 },
    result: "14.02.1918",
  },
  {
    data: { day: 46, year: 1918 },
    result: "28.02.1918",
  },
];

function dayToDateInRussia(n, year) {
  const debug = true;
  if (debug) console.log();

  let isLeapYear = false;
  if (year > 1699 && year < 1918) {
    isLeapYear = year % 4 === 0;
  } else {
    isLeapYear = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  }
  if (debug) console.log(year, "isLeapYear", isLeapYear);
  const isFeb1918 = year === 1918 && n > 31 && n < 47;
  const days = [
    31,
    year === 1918 && !isFeb1918 ? 15 : isLeapYear ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  if (debug) console.log("days", days);
  let daysNumber = n + (isFeb1918 ? 13 : 0);
  if (debug) console.log("daysNumber", daysNumber);
  for (const [k, v] of days.entries()) {
    daysNumber -= v;
    if (debug) console.log("daysNumber", daysNumber);
    if (daysNumber <= 0) return [year, k + 1, v + daysNumber];
  }
}

function formatDate(y, m, d) {
  return (
    d.toString().padStart(2, "0") +
    "." +
    m.toString().padStart(2, "0") +
    "." +
    y
  );
}

function dayOfProgrammer(year) {
  return formatDate(...dayToDateInRussia(256, year));
}

for (t of testArr) {
  const result = formatDate(...dayToDateInRussia(...Object.values(t.data)));
  console.log(result, "eq", t.result, "=>", result === t.result);
}
