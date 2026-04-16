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

var testArr2 = [
  {
    data: [
      [
        5, 3, 4, 2, 3, 3, 2, 5, 5, 5, 2, 5, 3, 3, 2, 5, 5, 5, 2, 52, 5, 2, 5, 2,
        2, 3,
      ],
      [
        5, 3, 4, 2, 3, 3, 2, 5, 5, 5, 2, 5, 3, 3, 2, 5, 5, 5, 2, 52, 5, 2, 5, 2,
        2, 3,
      ],
    ],
  },
];
function formatLevel(l) {
  return l.a.join("") + "\n" + "_".padStart(l.i, " ");
}

function formatStack(s) {
  return s.toReversed().map(formatLevel).join("\n");
}
function* generatePermutation(n) {
  const debug = false;
  if (debug) console.log(n);
  const s = [
    {
      i: 0,
      a: Array.from({ length: n }, (_, i) => i),
    },
  ];
  if (debug) console.log(formatStack(s));
  //let counter = 0;
  outer: while (s.length > 0) {
    if (debug) console.log();
    if (s.at(-1).a.length === 1) {
      //counter++;
      let perm = [];
      for (let i = s.length - 1; i > -1; i--) {
        perm.push(s[i].a[s[i].i]);
      }
      if (debug) console.log("perm", perm.join(""));
      yield perm;
      while (s.at(-1).i === s.at(-1).a.length - 1) {
        s.pop();
        if (s.length === 0) break outer;
      }
      s.at(-1).i++;
    }
    const a = s.at(-1).a;
    const i = s.at(-1).i;
    s.push({ i: 0, a: a.slice(0, i).concat(a.slice(i + 1)) });
    if (debug) console.log(formatStack(s));
  }
  //console.log("counter", counter);
}
function formingMagicSquare(s) {
  const debug = true;
  // if (debug) console.log(s);
  //const syms = Array.from({ length: n }, (_, i) => i + 1);
  const a = generatePermutation(9);
  let i = a.next();
  while (!i.done) {
    if (debug) console.log("perm", i.value.join(""));
    i = a.next();
  }
}

for (t of testArr) {
  const expected = formingMagicSquare(t.data);
  console.log(expected, "eq", t.expected, "=>", expected === t.expected);
}
