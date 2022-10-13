function flatten<T>(array: T) {
  const result: FlatArray<T, 21>[] = [];

  if (!Array.isArray(array)) {
    throw new Error('Argument must be an array');
  }

  array.forEach(value => {
    if (Array.isArray(value)) {
      result.push(...flatten(value));
    } else {
      result.push(value);
    }
  });
  return result;
}

export default flatten;
