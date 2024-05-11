# supersplit 

`supersplit` is a lightweight npm package that provides a simple string splitting functionality based on specified characters and indexes using recursion.

## Installation

You can install `supersplit` using npm:

```bash
npm install @elel-dev/supersplit
```

## Usage

```typescript
// Import the ssplit function
import ssplit from "@elel-dev/supersplit";

// Example usage:
const inputString = "apple.apple.orange";
const separators = [".", "."];
const indices = [1, 1];

const result = ssplit(inputString, separators, indices);

console.log("Result:", result);
// Result: orange
```

## API

`ssplit(toSplit: string, chars: string[], indexes: number[]): string`

Splits a string based on specified characters and indexes using recursion.

- toSplit: The input string to be split.
- chars: An array of characters used for splitting the string.
- indexes: An array of indexes indicating which part of the split result to choose.

Returns the result of recursively dividing the input string based on the specified characters and indexes.

```typescript
// Example 1:
const result1 = ssplit("apple.apple.orange", [".", "."], [1, 1]);
console.log(result1);
// Output: orange

// Example 2:
const result2 = ssplit("nope.this.nope", [".", "."], [1, 0]);
console.log(result2);
// Output: this
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
