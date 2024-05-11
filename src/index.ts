import recursiveDivide from "./split/recursiveDivide";

/**
 * Splits a string based on specified characters and indexes using recursion.
 *
 * @param toSplit - The input string to be split.
 * @param chars - An array of characters used for splitting the string.
 * @param indexes - An array of indexes indicating which part of the split result to choose.
 * @returns The result of recursively dividing the input string based on the specified characters and indexes.
 *
 * @example
 * // Example usage:
 * const inputString = "nope.nope.this";
 * const separators = [".", "."];
 * const indices = [1, 1];
 * const result = ssplit(inputString, separators, indices);
 * console.log(result);
 * // Output: this
 */
const ssplit = (toSplit: string, chars: string[], indexes: number[]) => {
  return recursiveDivide(toSplit, chars, indexes);
};

module.exports = ssplit;
