# 🧠 Daily Problem Solving Practice

Welcome to my **Daily Problem Solving Practice** repository!  
Here, I solve **one problem each day** and organize them by **data structure** or **topic**.  
This helps me build consistency, sharpen my coding skills, and understand key data structures and algorithms deeply.

---

## 📁 Project Structure

Each folder is named after a **data structure** or **algorithmic topic** and contains:

- ✅ Daily problems (1 per file)
- 🧪 Corresponding test files to validate the solutions

---

# Two Adds (20 mins)

### Problem:

Write a function that adds from two invocations.

#### Example:

```js
twoAdds(3)(4); // This should return 7
```

Additional Problem 1:
Write a function that allows you to multiply from two invocations instead of adding.
Example:

js
Copy
Edit
twoMults(3)(4); // This should return 12

Additional Problem 2:
Write a function that subtracts from two invocations.
Example:

js
Copy
Edit
twoSubtracts(10)(4); // This should return 6
Topic Covered: Closures, Function Composition.

2. Clonator (30 mins)
   Problem:
   Write a function that creates a deep copy of the input it receives.
   Example:

js
Copy
Edit
const original = { num: 0, string: 'Hello', func: function() { return 'Test'; }};
const copy = deepClone(original);
console.log(copy.num); // 0
console.log(copy.string); // 'Hello'
Additional Problem 1:
Write a function that creates a shallow copy of the object instead of a deep copy.
Example:

js
Copy
Edit
const original = { num: 0, string: 'Hello' };
const shallowCopy = shallowClone(original);
console.log(shallowCopy.num); // 0
Additional Problem 2:
Create a function that deep clones an array of objects. Each object should be cloned individually.
Example:

js
Copy
Edit
const arr = [{ name: 'John' }, { name: 'Jane' }];
const clonedArr = deepClone(arr);
console.log(clonedArr[0].name); // 'John'
Topic Covered: Deep vs Shallow Copy, Object Manipulation.

3. Highest Word Count (45 mins)
   Problem:
   Write a function that returns the most frequent word in a string. If multiple words have the same highest frequency, return all of them in an array.
   Example:

js
Copy
Edit
highestWordCount("hello world hello test world");  
// This should return ['hello', 'world'] because they both appear most frequently.
Additional Problem 1:
Write a function that returns the word with the longest length in a given string. If there are multiple words with the same longest length, return them in an array.
Example:

js
Copy
Edit
longestWord("The quick brown fox jumped over the lazy dog");
// This should return ['jumped']
Additional Problem 2:
Write a function that returns the total number of unique words in a given string. Exclude punctuation and numbers while counting words.
Example:

js
Copy
Edit
uniqueWords("The quick brown fox jumped over the lazy dog");
// This should return 8, as each word is unique.
Topic Covered: String Manipulation, Word Counting, Regular Expressions.

4. Evented Thing (30 mins)
   Problem:
   Create a class EventedThing that can handle events. The class should have:

A method on(event, callback) to listen for events.

A method trigger(event, ...args) to trigger the event and call the corresponding callbacks.

Example:

js
Copy
Edit
const eventedThing = new EventedThing();
eventedThing.on('greet', (name) => console.log('Hello, ' + name));
eventedThing.trigger('greet', 'Sarah'); // Output: "Hello, Sarah"
Additional Problem 1:
Add a method off(event) to remove all listeners for a given event.
Example:

js
Copy
Edit
eventedThing.off('greet');
eventedThing.trigger('greet', 'Sarah'); // No output
Additional Problem 2:
Modify the class to allow triggering an event multiple times with different arguments, but ensure each callback is only triggered once per event.
Example:

js
Copy
Edit
eventedThing.on('greet', (name) => console.log('Hello, ' + name));
eventedThing.trigger('greet', 'John'); // Output: "Hello, John"
eventedThing.trigger('greet', 'Jane'); // Output: "Hello, Jane"
Topic Covered: Object-Oriented Programming, Event Handling.

5. Fix This ASAP (30 mins)
   Problem:
   You have an issue in a tax calculation where the tax shows a floating-point imprecision (e.g., 0.020000000000000004 instead of 0.02).
   Fix the issue by ensuring the tax value is calculated correctly.

Topic Covered: Floating Point Precision, Number Handling.

6. Yarra (30 mins)
   Problem:
   Write a function yarra() that reverses an array in-place without using the native reverse() method.

Example:

js
Copy
Edit
let arr = [1, 2, 3, 4];
yarra(arr);  
// This should mutate arr to [4, 3, 2, 1]
Additional Problem 1:
Write a function that rotates an array by n positions in place. The array should be shifted by n elements, and the excess should come back to the beginning.
Example:

js
Copy
Edit
rotateArray([1, 2, 3, 4], 2); // This should return [3, 4, 1, 2]
Additional Problem 2:
Write a function that checks if an array is a palindrome (the same forwards and backwards).
Example:

js
Copy
Edit
isPalindrome([1, 2, 3, 2, 1]); // This should return true
Topic Covered: Array Manipulation, In-Place Operations.

7. Methodize (20 mins)
   Problem:
   Write a function that converts a binary function (a function that takes two arguments) into a method that can be called on a number.
   For example, converting an addition function into a method on the Number prototype.

Example:

js
Copy
Edit
function add(a, b) { return a + b; }
Number.prototype.add = methodize(add);
(3).add(5); // This should return 8
Additional Problem 1:
Write a function methodize that can convert a binary subtraction function into a method on a number.
Example:

js
Copy
Edit
function subtract(a, b) { return a - b; }
Number.prototype.subtract = methodize(subtract);
(10).subtract(5); // This should return 5
Additional Problem 2:
Write a function that converts a binary division function into a method on a number.
Example:

js
Copy
Edit
function divide(a, b) { return a / b; }
Number.prototype.divide = methodize(divide);
(10).divide(2); // This should return 5
Topic Covered: Prototypes, Higher-Order Functions.

8. Circular List (30 mins)
   Problem:
   Write a function that determines if a linked list is circular. A list is circular if the next pointer of its last node points to a previous node, instead of being null or undefined.

Example:

js
Copy
Edit
const head = { value: 1, next: { value: 2, next: { value: 3, next: head } } };
isCircular(head); // This should return true because the list is circular.
Additional Problem 1:
Write a function that checks if a linked list is palindromic (it reads the same forwards and backwards).
Example:

js
Copy
Edit
isPalindrome(head); // This should return true for a list like 1 -> 2 -> 1.
Additional Problem 2:
Write a function that detects a cycle in a linked list using the Floyd's Tortoise and Hare algorithm.
Example:

js
Copy
Edit
hasCycle(head); // This should return true for a cyclic linked list.
Topic Covered: Linked Lists, Cycle Detection.

9. Spiral Traversal (45 mins)
   Problem:
   Write a function that spirally traverses a matrix (a grid of numbers) and returns a comma-separated string of the values.

Example:

js
Copy
Edit
let string = `1,2,3
              4,5,6
              7,8,9`;
traverseSpirally(string); // This should return '1,2,3,6,9,8,7,4,5'
Additional Problem 1:
Write a function that returns the sum of all values in a matrix traversed in spiral order.
Example:

js
Copy
Edit
spiralSum(string); // This should return the sum of all values in the spiral order.
Additional Problem 2:
Write a function that traverses the matrix in a zigzag pattern (alternating left-to-right and right-to-left rows).
Example:

js
Copy
Edit
zigzagTraversal(string); // This should return '1,2,3,6,5,4,7,8,9'.
Topic Covered: Matrix Traversal, Algorithms.

10. Diagonal Difference (45 mins)
    Problem:
    Write a function that calculates the difference between the sums of the diagonals in a square matrix. The matrix is given as a string, and the function should return the absolute difference between the sums of the diagonals.

Example:

js
Copy
Edit
let matrix = `7,-12,6
              -3,8,1
              23,-16,4`;
diagonalDifference(matrix); // This should return '-18' (calculated difference between diagonals)
Additional Problem 1:
Write a function that returns the sum of the values on both diagonals.
Example:

js
Copy
Edit
diagonalSum(matrix); // This should return the sum of both diagonals.
Additional Problem 2:
Write a function that checks whether the two diagonals in a matrix have the same sum.
Example:

js
Copy
Edit
hasEqualDiagonals(matrix); // This should return true if the diagonals have the same sum.
Topic Covered: Matrix Operations, Arithmetic Operations.

11. Prime Tester (45 mins)
    Problem:
    Write a function that checks whether a given number is prime.
    Example:

js
Copy
Edit
isPrime(5); // This should return true because 5 is a prime number.
Additional Problem 1:
Write a function that returns all prime numbers less than or equal to a given number.
Example:

js
Copy
Edit
getPrimes(10); // This should return [2, 3, 5, 7]
Additional Problem 2:
Write a function that checks if a number is semi-prime (a product of two primes).
Example:

js
Copy
Edit
isSemiPrime(6); // This should return true because 6 is a product of primes 2 and 3.
Topic Covered: Prime Numbers, Number Theory.

12. Give Me Time (45 mins)
    Problem:
    Write a function that converts a timestamp (number) into a human-friendly time interval.
    For example, it should return "now", "1 min ago", or "5 days ago", depending on how much time has passed since the timestamp.

Example:

js
Copy
Edit
giveMeTime(new Date(Date.now() - 28e1).getTime()); // This should return 'now'
Additional Problem 1:
Write a function that formats a timestamp into a specific time format (e.g., "MM-DD-YYYY").
Example:

js
Copy
Edit
formatTimestamp(Date.now()); // This should return the current date in MM-DD-YYYY format.
Additional Problem 2:
Write a function that returns how much time has passed between two given timestamps in a user-friendly way (e.g., "5 hours ago").
Example:

js
Copy
Edit
timePassed(new Date(Date.now() - 2 \* 3600e3).getTime()); // This should return '2 hours ago'
Topic Covered: Date & Time Handling, Formatting.

13. Many Invocations (20 mins)
    Problem:
    Write a function that sums values over many invocations, until an empty invocation is seen, at which point it returns the sum. If the first invocation is empty, return undefined.

Example:

js
Copy
Edit
addMany(3)(4)(1)(7)(); // This should return 15
Additional Problem 1:
Write a function that counts the number of invocations before an empty invocation is seen.
Example:

js
Copy
Edit
countInvocations(3)(4)(1)(7)(); // This should return 4
Additional Problem 2:
Write a function that tracks the maximum value across many invocations until the empty invocation is seen.
Example:

js
Copy
Edit
maxValue(3)(4)(7)(1)(); // This should return 7
Topic Covered: Closures, Function Composition.

14. Common Ancestor (60 mins)
    Problem:
    Write a function that takes two nodes in a tree and returns the closest common ancestor of those nodes.

Example:

js
Copy
Edit
const grandma = new Tree('grandma');
const mom = new Tree('mom');
const ant = new Tree('ant');
grandma.addChild(mom);
grandma.addChild(ant);
grandma.commonAncestor(mom, ant); // This should return grandma
Additional Problem 1:
Write a function that finds the deepest node in a binary tree.
Example:

js
Copy
Edit
findDeepestNode(grandma); // This should return the deepest node.
Additional Problem 2:
Write a function that checks whether a given node is a leaf node (i.e., it has no children).
Example:

js
Copy
Edit
isLeaf(ant); // This should return true because 'ant' has no children.
Topic Covered: Tree Traversal, Binary Trees.

## 🔹 Data Structures

### **1. Arrays & Strings**

1. **Problem:**  
   Write a function `reverseString(str)` that takes a string and returns it reversed.  
   **Complexity:** What is the time and space complexity of your solution?  
   **Test:** Test with empty strings, single-character strings, and large strings.

2. **Problem:**  
   Implement `findMaxSumSubarray(arr, k)` to find the maximum sum of a subarray of size `k`.  
   **Complexity:** What is the time complexity?  
   **Test:** Test with different values of `k` and varying array sizes.

3. **Problem:**  
   Write a function `longestSubstringWithoutRepeatingChars(s)` that returns the length of the longest substring without repeating characters.  
   **Complexity:** What is the time complexity of your solution?  
   **Test:** Test with strings of different lengths, including edge cases like all unique characters.

---

### **2. Hash Maps & Sets**

1. **Problem:**  
   Given an array, write a function `containsDuplicate(nums)` that returns `true` if any value appears at least twice in the array.  
   **Complexity:** What is the time and space complexity of your solution?  
   **Test:** Test with arrays of varying lengths, including no duplicates.

2. **Problem:**  
   Implement `groupAnagrams(strs)` that groups anagrams from an array of strings.  
   **Complexity:** What is the time complexity of your approach?  
   **Test:** Test with lists of strings, including strings with no anagrams.

3. **Problem:**  
   Write a function `topKFrequent(nums, k)` that returns the `k` most frequent elements in an array.  
   **Complexity:** What is the time complexity?  
   **Test:** Test with arrays where some numbers appear more than others.

---

### **3. Linked Lists**

1. **Problem:**  
   Write a function `removeDuplicates(head)` that removes duplicates from a sorted linked list.  
   **Complexity:** What is the time complexity of your solution?  
   **Test:** Test with linked lists having no duplicates, multiple duplicates, and one element.

2. **Problem:**  
   Implement `mergeTwoLists(l1, l2)` to merge two sorted linked lists into one sorted list.  
   **Complexity:** What is the time complexity?  
   **Test:** Test with various combinations of input lists, including empty lists.

3. **Problem:**  
   Write a function `reverseLinkedList(head)` that reverses a singly linked list.  
   **Complexity:** What is the time complexity?  
   **Test:** Test with lists of varying sizes and an empty list.

---

### **4. Stacks & Queues**

1. **Problem:**  
   Implement `validParentheses(s)` to check if parentheses are balanced in a string.  
   **Complexity:** What is the time and space complexity of your solution?  
   **Test:** Test with different types of parentheses and edge cases.

2. **Problem:**  
   Design a stack that supports push, pop, and retrieving the minimum element in constant time.  
   **Complexity:** Discuss the time complexity of each operation.  
   **Test:** Write test cases with a mix of regular and minimum values.

3. **Problem:**  
   Design a queue using two stacks. Implement the `enqueue(x)` and `dequeue()` operations.  
   **Complexity:** What is the time complexity of each operation?  
   **Test:** Test with multiple enqueue and dequeue operations.

---

### **5. Trees (Binary Trees, BSTs, Tries)**

1. **Problem:**  
   Implement `maxDepth(root)` that returns the maximum depth of a binary tree.  
   **Complexity:** What is the time complexity of your solution?  
   **Test:** Test with balanced, unbalanced, and empty trees.

2. **Problem:**  
   Given a binary search tree, implement `isValidBST(root)` to check if the tree is a valid binary search tree.  
   **Complexity:** What is the time complexity of your solution?  
   **Test:** Test with valid and invalid BSTs.

3. **Problem:**  
   Write a function `findClosestValueInBST(tree, target)` to find the value in the BST closest to the target.  
   **Complexity:** What is the time complexity of your approach?  
   **Test:** Test with trees of varying depths and edge cases for target values.

---

## 🔹 Algorithms

### **1. Two Pointers**

1. **Problem:**  
   Write a function `pairSum(nums, target)` that finds two numbers in the array whose sum is equal to the target value.  
   **Complexity:** What is the time complexity of your solution?  
   **Test:** Test with arrays of various sizes, including cases with no valid pairs.

2. **Problem:**  
   Implement `removeDuplicates(nums)` that removes duplicates from a sorted array and returns the new length of the array.  
   **Complexity:** What is the time complexity?  
   **Test:** Test with sorted arrays, including arrays with no duplicates.

3. **Problem:**  
   Write a function `containerWithMostWater(height)` that finds the container with the most water given an array of heights.  
   **Complexity:** What is the time complexity of your solution?  
   **Test:** Test with various arrays of heights, including edge cases.

---

### **2. Recursion & Backtracking**

1. **Problem:**  
   Write a function `fibonacci(n)` that returns the `n`-th Fibonacci number using recursion.  
   **Complexity:** What is the time complexity of this approach?  
   **Test:** Test with small and large values of `n`.

2. **Problem:**  
   Write a function `generateParentheses(n)` that generates all valid combinations of parentheses for `n` pairs.  
   **Complexity:** What is the time complexity of your solution?  
   **Test:** Test with various values of `n`, including small values like `n = 0` and `n = 1`.

3. **Problem:**  
   Implement `combinationSum(candidates, target)` to find all unique combinations of numbers from `candidates` that add up to `target`.  
   **Complexity:** What is the time complexity of your approach?  
   **Test:** Test with different candidate arrays and targets, including edge cases.

---

### **3. Depth First / Breadth First Search (DFS/BFS)**

1. **Problem:**  
   Write a function `maxDepth(root)` to find the maximum depth of a binary tree using BFS or DFS.  
   **Complexity:** What is the time complexity of your solution?  
   **Test:** Test with trees of varying depths and edge cases.

2. **Problem:**  
   Given a maze, write a function `solveMaze(maze)` that uses BFS to find the shortest path from the top-left to the bottom-right corner.  
   **Complexity:** What is the time complexity of your solution?  
   **Test:** Test with different maze sizes and configurations.

3. **Problem:**  
   Implement `wordLadder(beginWord, endWord, wordList)` to find the shortest transformation sequence from `beginWord` to `endWord`, where each transformed word must exist in the word list.  
   **Complexity:** What is the time complexity of your solution?  
   **Test:** Test with small and large word lists, including edge cases like no transformation possible.

---

### **4. Sorting & Searching**

1. **Problem:**  
   Implement the `binarySearch(arr, target)` function to find the index of `target` in a sorted array using binary search.  
   **Complexity:** What is the time complexity of your solution?  
   **Test:** Test with arrays of various sizes, including cases where the target does not exist.

2. **Problem:**  
   Write a function `quickSort(arr)` that implements the quicksort algorithm to sort an array.  
   **Complexity:** What is the time complexity of quicksort in the best, worst, and average cases?  
   **Test:** Test with different arrays, including already sorted and reverse-sorted arrays.

3. **Problem:**  
   Implement `findKthLargest(nums, k)` to find the `k`-th largest element in an unsorted array.  
   **Complexity:** What is the time complexity of your solution?  
   **Test:** Test with large arrays and edge cases where `k` is `1` or the length of the array.
