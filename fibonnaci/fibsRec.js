function fibsRecursive(n) {
  if (n <= 2) return [0, 1];

  const sequence = fibsRecursive(n - 1);
  const sequenceLength = sequence.length;

  sequence.push(sequence[sequenceLength - 1] + sequence[sequenceLength - 2]);

  return sequence;
}

console.log(fibsRecursive(21));
