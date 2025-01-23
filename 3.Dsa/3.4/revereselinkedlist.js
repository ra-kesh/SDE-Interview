// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:

// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

// class ListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// function arrayToLinkedList(arr) {
//   if (arr.length === 0) return null;
//   const head = new ListNode(arr[0]);
//   let current = head;
//   for (let i = 1; i < arr.length; i++) {
//     current.next = new ListNode(arr[i]);
//     current = current.next;
//   }
//   return head;
// }

function reverseLinkedlist(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}

// // Convert array to linked list
// const linkedListHead = arrayToLinkedList([1, 2, 3, 4, 5]);

// // Reverse the linked list
// const reversedListHead = reverseLinkedlist(linkedListHead);

// // Function to print the linked list
// function printLinkedList(head) {
//   let current = head;
//   const result = [];
//   while (current) {
//     result.push(current.value);
//     current = current.next;
//   }
//   console.log(result.join(" -> "));
// }

// // Print the reversed linked list
// printLinkedList(reversedListHead);
