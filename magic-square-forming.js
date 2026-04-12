var testArr = [
  {
    data: [
      [5, 3, 4],
      [1, 5, 8],
      [6, 4, 2],
    ],
    expected: 7,
  },
  {
    data: [
      [4, 9, 2],
      [4, 5, 7],
      [6, 1, 6],
    ],
    expected: 4,
  },
];

function generateMagicSquares(n) {
  const debug = true;
  if (debug) console.log(n);
  const a = Array.from({ length: 9 }, (_, i) => i + 1);
  if (debug) console.log("a", a);
  const e = 0;

  a.filter((v) => v !== e).forEach((e, _, a) => {
    if (debug) console.log(" ".repeat(9 - a.length), e);
    const numbers = [e];
    a.filter((v) => v !== e).forEach((e, _, a) => {
      numbers.push(e);
      if (debug) console.log(" ".repeat(9 - a.length), e);
      a.filter((v) => v !== e).forEach((e, _, a) => {
        numbers.push(e);
        if (debug) console.log(" ".repeat(9 - a.length), e);
        if (debug) console.log("numbers", numbers);
        numbers.length = 0;
        /* Array(n * n)
                .keys()
                .filter((v) => v !== e)
                .forEach((e) => {
                  numbers.push(e + 1);
                  if (debug) console.log(" ".repeat(level), e + 1);
                  Array(n * n)
                    .keys()
                    .filter((v) => v !== e)
                    .forEach((e) => {
                      numbers.push(e + 1);
                      if (debug) console.log(" ".repeat(level), e + 1);
                      Array(n * n)
                        .keys()
                        .filter((v) => v !== e)
                        .forEach((e) => {
                          numbers.push(e + 1);
                          if (debug) console.log(" ".repeat(level), e + 1);
                          Array(n * n)
                            .keys()
                            .filter((v) => v !== e)
                            .forEach((e) => {
                              numbers.push(e + 1);
                              if (debug) console.log(" ".repeat(level), e + 1);
                              Array(n * n)
                                .keys()
                                .filter((v) => v !== e)
                                .forEach((e) => {
                                  numbers.push(e + 1);
                                  if (debug)
                                    console.log(" ".repeat(level), e + 1);
                                });
                            });
                        });
                    });
                }); */
      });
    });
  });
}
function formingMagicSquare(s) {
  const debug = true;
  if (debug) console.log(s);
  const sums = [
    { key: "0002", val: s[0][0] + s[0][1] + s[0][2] },
    { key: "1012", val: s[1][0] + s[1][1] + s[1][2] },
    { key: "2022", val: s[2][0] + s[2][1] + s[2][2] },
    { key: "0020", val: s[0][0] + s[1][0] + s[2][0] },
    { key: "0121", val: s[0][1] + s[1][1] + s[2][1] },
    { key: "0222", val: s[0][2] + s[1][2] + s[2][2] },
    { key: "0022", val: s[0][0] + s[1][1] + s[2][2] },
    { key: "0220", val: s[0][2] + s[1][1] + s[2][0] },
  ];
  if (debug) console.log(sums);
  const sorted = sums.sort(
    (a, b) => Math.abs(15 - a.val) - Math.abs(15 - b.val),
  );
  if (debug) console.log(sorted);
  generateMagicSquares(3);
}

for (t of testArr) {
  const expected = formingMagicSquare(t.data);
  console.log(expected, "eq", t.expected, "=>", expected === t.expected);
}
