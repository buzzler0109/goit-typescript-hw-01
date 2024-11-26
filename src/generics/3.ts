function merge<T extends object, K extends object>(objA: T, objB: K) {
  return Object.assign(objA, objB);
}
