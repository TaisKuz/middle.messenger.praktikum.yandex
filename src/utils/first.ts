function first<T>(list: Array<T>) {
  if (!Array.isArray(list)) return undefined;

  return list.length ? list[0] : undefined;
}

export default first;
