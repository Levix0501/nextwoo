/**
 * @param { Promise } promise
 * @return { Promise }
 */
export function to<T, U = Error>(
  promise: Promise<T>
): Promise<[U, undefined] | [null, T]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => [err, undefined]);
}

export default to;
