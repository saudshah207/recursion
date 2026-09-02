function fibs(n) {
  const zeroth = 0,
    first = 1;
  const sequence = [zeroth, first];

  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence;
}

console.log(fibs(21));
