var arr = [
  {
    data: [2, 1, 1, 2],
    result: "YES",
  },
  {
    data: [0, 3, 4, 2],
    result: "YES",
  },
  {
    data: [14, 4, 98, 2],
    result: "YES",
  },
];

function kangaroo(x1, v1, x2, v2) {
  console.log("x1", "v1", "x2", "v2");
  console.log(x1, v1, x2, v2);

  if (x1 !== x2 && v1 === v2) return "NO";
  if ((v1 > v2 && v1 + x1 > v2 + x2) || (v1 < v2 && v1 + x1 < v2 + x2))
    return "NO";
  let road1 = x1;
  let road2 = x2;
  if (v1 > v2) {
    for (; road1 < road2; ) {
      road1 += v1;
      road2 += v2;
      console.log(road1, road2);
    }
  } else {
    for (; road2 < road1; ) {
      road1 += v1;
      road2 += v2;
      console.log(road1, road2);
    }
  }
  return road1 === road2 ? "YES" : "NO";
}

for (t of arr) {
  const result = kangaroo(...t.data);
  console.log(result, "eq", t.result, "=>", result === t.result);
}
