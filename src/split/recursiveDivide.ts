/**
 * Recursively divides an input string based on characters and indexes.
 *
 * @param inputString - The input string to be divided.
 * @param chars - An array of characters used for splitting the string.
 * @param indexes - An array of indexes indicating which part of the split result to choose.
 * @param counter - Counter variable for recursion (optional, default is 0).
 * @returns The divided string based on the specified characters and indexes.
 */
const recursiveDivide = (
  inputString: string,
  chars: string[],
  indexes: number[],
  counter: number = 0
): string => {
  if (counter >= 0 && (counter >= chars.length || counter >= indexes.length))
    return inputString;
  const char = chars[counter];
  const index = indexes[counter];
  if (!char || !index) return inputString;
  let parts = inputString.split(char);
  if (parts.length < 2) return inputString;
  if (!parts[0]) return inputString;
  parts = [parts[0], parts.slice(1).join(char)];
  const newInput = parts[index];
  if (!newInput) return inputString;
  return recursiveDivide(newInput, chars, indexes, counter + 1);
};

export default recursiveDivide;
