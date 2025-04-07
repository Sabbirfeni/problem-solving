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
