// Problem 1
// -------------------
// Write a function that adds from two invocations.
// Example:
// twoAdds(3)(4); // This should return 7

export function twoAdds(firstNum) {
  return function (secondNum) {
    return firstNum + secondNum;
  };
}
