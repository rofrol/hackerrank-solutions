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
      [3, 5, 7],
      [8, 1, 5],
    ],
    expected: 1,
  },
  {
    data: [
      [4, 9, 2],
      [4, 5, 7],
      [6, 1, 6],
    ],
    expected: 3, // in description it is 4, but it is 3 for square 492357816
  },
];

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
      const perm = s.map((e) => e.a[e.i]);
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
  function formatStack(s) {
    function formatLevel(l) {
      return l.a.join("") + "\n" + "_".padStart(l.i, " ");
    }
    return s.toReversed().map(formatLevel).join("\n");
  }
}

function isSquare(s) {
  if (!Array.isArray(s)) return false;
  return !s.some((e) => e.length !== s.length);
}
function isMagicSquare(s) {
  const debug = false;
  if (!isSquare(s)) return false;
  if (s.length === 2) return false;
  let sum =
    s.length > 9
      ? s[0].reduce((acc, curr) => {
          acc += curr;
          return acc;
        }, 0)
      : [0, 1, , 15, 34, 65, 111, 175, 260, 369][s.length];
  if (debug) console.log("sum", sum);

  let sum_backslash = 0;
  let sum_slash = 0;
  for (let i = 0; i < s.length; i++) {
    let sum_row = 0;
    let sum_col = 0;
    sum_backslash += s[i][i];
    if (debug) console.log(s[i][i], "sum_backslash", sum_backslash);
    if (sum_backslash > sum) return false;
    sum_slash += s[s.length - 1 - i][i];
    if (debug) console.log(s[s.length - 1 - i][i], "sum_slash", sum_slash);
    if (sum_slash > sum) return false;
    for (let j = 0; j < s.length; j++) {
      sum_row += s[i][j];
      if (debug) console.log(s[i][j], "sum_row", sum_row);
      if (sum_row > sum) return false;
      sum_col += s[j][i];
      if (debug) console.log(s[j][i], "sum_col", sum_col);
      if (sum_col > sum) return false;
    }
    if (sum_row < sum) return false;
    if (sum_col < sum) return false;
  }
  if (sum_backslash < sum) return false;
  if (sum_slash < sum) return false;
  return true;
}

function unflatSquare(s) {
  let debug = false;
  const n = Math.sqrt(s.length);
  const s2 = s.reduce(
    (acc, cur, i) => {
      acc.at(-1).push(cur);
      if ((i + 1) % n === 0 && i + 1 !== s.length) acc.push([]);
      return acc;
    },
    [[]],
  );
  if (debug) console.log("s2\n", s2);
  return s2;
}

function getCost(a, b) {
  const debug = false;
  if (debug) console.log(a);
  if (debug) console.log(b);
  return a.reduce((acc, val, i) => {
    acc += Math.abs(val - b[i]);
    return acc;
  }, 0);
}

function formingMagicSquare(s) {
  const debug = false;
  // if (debug) console.log(s);
  // const syms = Array.from({ length: n }, (_, i) => i + 1);
  if (debug) console.log(isMagicSquare(s));
  const a = generatePermutation(9);
  let i = a.next();
  let minCost = Infinity;
  let c = 0;
  while (!i.done) {
    // if (c === 20) break;
    // if (debug) console.log("perm", i.value.join(""));
    const s2 = i.value.map((v) => v + 1);
    // if (debug) console.log("s2", s2.join(""));
    const square = unflatSquare(s2);
    if (isMagicSquare(square)) {
      // if (debug) console.log("square", square);
      let cost = getCost(s.flat(), s2);
      // change to <= for debuging
      if (cost < minCost) {
        minCost = cost;
        if (debug) console.log("minCost", minCost);
        if (debug) console.log("s2", s2.join(""));
      }
    }
    // if (s2.join("") === "834159672") break;
    i = a.next();
    c++;
  }
  // if (debug) console.log("c", c);
  // if (debug) console.log("minCost", minCost);
  return minCost;
}

function arrEqual(a, b) {
  return a.length === b.length && !a.some((e, i) => e !== b[i]);
}

for (t of testArr) {
  const expected = formingMagicSquare(t.data);
  console.log("\n\n--------------------------");
  console.log(expected, "eq", t.expected, "=>", expected === t.expected);
}

const s1 = [
  [8, 3, 4],
  [1, 5, 9],
  [6, 7, 2],
];

const s2 = [8, 3, 4, 1, 5, 9, 6, 7, 2];

console.log(isMagicSquare(s1));
console.log(isMagicSquare(unflatSquare(s2)));
console.log(isMagicSquare(s2));
console.log(isSquare(s1));
console.log(isSquare(unflatSquare(s2)));
console.log(isSquare(s2));
console.log(unflatSquare(s2));
console.log(arrEqual([8, 3, 4, 1, 5, 9, 6, 7, 2], [8, 3, 4, 1, 5, 9, 6, 7, 2]));
console.log(arrEqual([7, 3, 4, 1, 5, 9, 6, 7, 2], [8, 3, 4, 1, 5, 9, 6, 7, 2]));
console.log(getCost("492457616".split(""), "492357816".split("")));
