1.Given an array arr[] of size N. 
The task is to create a linked list from the given array.

Examples:
Input: arr[]={1, 2, 3, 4, 5}
Output: 1->2->3->4->5
Input: arr[]={10, 11, 12, 13, 14}
Output: 10->11->12->13->14

*Solution*
1.create a function arrayToLinked that accepts array as argument
2. initial a variable root to null
3. Using a for loop iterate through the array length
  update the variable root = function insert(head, arr[i])
4. return root
*the insert function*
1. create an insert function that accepts 2 arguments root and item
2. initialize a variable node to a node instance
3. set node.data to item
4. Initialize a variable ptr
5.if root === null
    root = node
  else
    ptr = root;
    while (ptr->next)
      ptr = ptr->next
    ptr->next = node


2.Reverse a Linked List
Given a pointer to the head node of a linked list, the task is to reverse the linked list. 
We need to reverse the list by changing the links between nodes.

Examples:
Input: Head of following linked list
1->2->3->4->NULL
Output: The linked list should be changed to,
4->3->2->1->NULL
Input: Head of following linked list
1->2->3->4->5->NULL
Output: The linked list should be changed to,
5->4->3->2->1->NULL
Input: NULL
Output: NULL
Input: 1->NULL
Output: 1->NULL

*Solution*
1.create a reverse function that accepts node as an argument
2.Initialize a variable prev to null
3.Initialize a variable current to node
4.Initialize a variable next to null
5.while (current)
    update next to current->next
    update current->next to prev
    update prev to current
    update current to next
6.update node to prev
return node


3. Add two numbers
Given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3],
Input: l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0],
Input l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9],
Input: l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

*Solution*
1.create a function add that accepts 3 arguments, list1, list2 and carry
2.if (!list && !list2 && !carry) return null
3.Initialize a variable l1 to list1->data if there's list1 else initialize to zero
4.Initialize a variable l2 to list2->data if there's list2 else initialize to zero
5.Initialize a variable rem to carry or zero
6.Initialize a total = val1 + val2 + rem
update carry to total / 10
7.Initialize a variable val to total % 10
return an instance of node(val, add(l1->next, l2->next, carry))


4. Remove Nth Node From End of List
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Examples
Input: head = [1,2,3,4,5],
n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1],
n = 1
Output: []

Example 3:
Input: head = [1,2],
n = 1
Output: [1]

Constraints:
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz

*Solution*
1.Create a removeNth that accepts 2 arguments head and n
2.Initialize 2 variables fast and slow to head
3.while (n >= 1)
    update fast to fast->next
    n--
4.if (fast === null)
    update head to head->next
  else
    while (fast->next)
      update slow to slow->next
      update fast to fast->next
    update slow->next = slow->next->next
  return head


5. Merge Two Sorted Lists
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4],
list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [],
list2 = []
Output: []

Example 3:
Input: list1 = [],
list2 = [0]
Output: [0]

Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

*Solution*
1.Create a function mergeTwo that accepts two arguments list1 and list2
2.Initialize a variable dummy to an instance of node
3.Initialize a variable temp to dummy
4.if (!list1) return list2
5.if (!list2) return list1
6.while (list1 and list2)
    if(list1->data < list2->data)
      temp->next = list1
      list1 = list1->next
    else
      temp->next = list2
      list2 = list2->next
    temp = temp->next
7.if (list11 != null) temp->next = list1
8.if (list2 != null) temp->next = list2
9.return dummy->next


6.Remove Duplicates from Sorted List II
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
Return the linked list sorted as well.

Example 1:
Input: head = [1,2,3,3,4,4,5] Output: [1,2,5]

Example 2:
Input: head = [1,1,1,2,3]
Output: [2,3]

Constraints:
The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order

*Solution*
1.Create a function deleteDuplicate that accepts an argument head
2.Initialize a variable dummy to an instance of a new linked list
3.Initialize dummy->next to head
4.Initialize a variable current to head
5.Initialize a variable node to dummy
6.while (current)
    while (current->next and node->next and node->next->data === current->next->data)
      update current to current->next
    if (node->next === current) update node to node->next
    else node->next = current->next
    update current to current->next
7.return dummy->next


7.Rotate List
Given the head of a linked list, rotate the list to the right by k places.

Examples 1:
Input: head = [1,2,3,4,5],
k = 2
Output: [4,5,1,2,3]

Example 2:
Input: head = [0,1,2],
k = 4
Output: [2,0,1]

Constraints:
The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109

*Solution*
1.Create a function rotateRight that accepts 2 arguments head and n
2.if (!head) return head
3.Initialize a variable len to zero
4.Initialize a variable dummy to head
5.Initialize a variable temp;
6.while (dummy)
    update len to len + 1
    update dummy to dummy->next
7.If (len < 2) return head
8.update n to n % len
9.if (!n) return head
10. update n to n + 1
11.update dummy to head
12.while (len - n+1)
    update head to head->next
13.update temp = head->next
14.update head->next to null
15.update head to temp
16.while (temp->head)
    update temp to temp->next
17.update temp->next to dummy
18.return head


8.Reverse Nodes in k-Group
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
k is a positive integer and is less than or equal to the length of the linked list. 
If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
You may not alter the values in the list's nodes, only nodes themselves may be changed.

Example 1
Input: head = [1,2,3,4,5],
k = 2
Output: [2,1,4,3,5]

Example 2:
Input: head = [1,2,3,4,5],
k = 3
Output: [3,2,1,4,5]

Constraints:
The number of nodes in the list is n.
1 <= k <= n <= 5000
0 <= Node.val <= 1000

*solution*
1.create a function reverseKGroup that accepts 2 arguments head and k
2.Initialize 2 variables prevTail and nextTail to null
3.Initialize 2 variables currentHead and currentTail to head
4.while (currentHead)
    Initialize a variable count to 1
    while (currentTail->next and count < k)
      update currentTail to current->next
      update count = count + 1
    if(count != k) break;
    update nextHead to current->next
    update currentTail->next to null
    if(prevTail != null) update prevTail->next = null
    update currentTail to function reverse(currentHead)
    if (prevTail != null)
      update prevTail->next = currentTail
    else update head to currentHead
    update current->head to nextHead
    update prevTail to currentHead
    update currentHead to nextHead
    update currentTail to nextHead
5.return head

*The Reverse Function*
1.create a function reverse that accepts an argument head
2.Initialize a variable prev to null
3.Initialize 2 variables node and nextNode to head
4.while (node)
    update nextNode to nextNode->next
    update node->next to prev
    update prev to node
    update node to nextNode
5.return prev


9.Swap Nodes in Pairs
Given a linked list, swap every two adjacent nodes and return its head. 
You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]

Constraints:
The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100

*Solution*
1.create a function swapPairs that accepts an argument head
2.Initialize a variable dummy to an instance of a new linked list
3.update dummy->next to head
4.if (!head or !head->head) return head
5.Initialize a variable prev to dummy
6.Initialize a variable current to head
7.while (current and current-next)
    update prev->next to current->next
    update current->next to prev->next->next
    update prev->next->next to current
    update prev to current
    update current to current->next
8.return dummy->next


10.Remove Duplicates from Sorted list
Given the head of a sorted linked list, delete all duplicates such that each element appears
only once. 
Return the linked list sorted as well.

Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]

Constraints:
The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.

*Solution*
1.create a function swapPairs that accepts an argument head
2.Initialize a variable dummy to an instance of a new linked list
3.update dummy->next to head
4.if (!head or !head->head) return head
5.Initialize a variable prev to dummy
6.Initialize a variable current to head
7.while (current and current-next)
    update prev->next to current->next
    update current->next to prev->next->next
    update prev->next->next to current
    update prev to current
    update current to current->next
8.return dummy->next


11.Merge K sorted Lists
  You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
  Merge all the linked-list into one sorted linked-list and return it

  ```
  Example 1:
  Input: lists = [[1, 4, 5], [1, 3, 4], [2, 6]]
  Output: [1, 1, 2, 3, 4, 4, 5, 6]
  Explanation: The linked-lists are 
  [
    1->4->5,
    1->3->4,
    2->6
  ]
  merging them into one sorted list:
  1->1->2->3->4->4->5->6

  Example 2:
  Input: lists = []
  Output: []

  example 3:
  Input: lists = [[]]
  Output: []
  ```

  Constraints:
  - k == lists.length
  - 0 <= k <= 10^4
  - 0 <= lists[i].length <= 500
  - -10^4 <= lists[i][j] <= 10^4
  - lists[i] is sorted in ascending order
  - The sum of lists[i].length will not exceed 10^4

*Solution*
1.create a function mergerKLists that accepts an argument lists
2.if (lists.length === 0) return null;
3.while (lists.length > 1)
    Initialize a variable l1 to lists.shift();
    Initialize a variable l2 to lists.shift()
    Initialize the a variable merge to mergeLists(l1, l2)
4.return lists[0]

*The mergeLists Function*
1.Create a function mergeTwo that accepts two arguments list1 and list2
2.Initialize a variable dummy to an instance of node
3.Initialize a variable temp to dummy
4.if (!list1) return list2
5.if (!list2) return list1
6.while (list1 and list2)
    if(list1->data < list2->data)
      temp->next = list1
      list1 = list1->next
    else
      temp->next = list2
      list2 = list2->next
    temp = temp->next
7.if (list11 != null) temp->next = list1
8.if (list2 != null) temp->next = list2
9.return dummy->next


12 *Design Twitter*
Design a simplified version of Twitter where users can post tweets, follow/unfollow another
user, and is able to see the 10 most recent tweets in the user's news feed.

Implement the Twitter class:
Twitter() Initializes your twitter object.

void postTweet(int userId, int tweetId)
Composes a new tweet with ID tweetId by the user userId. Each call to this function will be
made with a unique tweetId

List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's
news feed. Each item in the news feed must be posted by users who the user followed or by the
user themself. Tweets must be ordered from most recent to least recent.

void follow(int followerId, int followeeId) The user with ID followerId started following the
user with ID followeeId.

void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing
the user with ID followeeId.

Example 1:
Input ["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed",
"unfollow", "getNewsFeed"] [[] [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]

Output [null, null, [5], null, null, [6, 5], null, [5]]

Explanation :
Twitter twitter = new Twitter();
twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
twitter.getNewsFeed(1); // User 1's news feed should return a list with 1 tweet id -> [5].
return [5]
twitter.follow(1, 2); // User 1 follows user 2.
twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
twitter.getNewsFeed(1); // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
twitter.unfollow(1, 2); // User 1 unfollows user 2.
twitter.getNewsFeed(1); // User 1's news feed should return a list with 1 tweet id -> [5], since
user 1 is no longer following user 2.

Constraints:
1 <= userId, followerId, followeeId <= 500
0 <= tweetId <= 104
All the tweets have unique IDs.
At most 3 * 104 calls will be made to postTweet, getNewsFeed, follow, and unfollow.


13. *Partition*
Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
You should preserve the original relative order of the nodes in each of the two partitions.

Example 1:
Input: head = [1,4,3,2,5,2],
x = 3
Output: [1,2,2,4,3,5]

Example 2:
Input: head = [2,1],
x = 2
Output: [1,2]

Constraints:
The number of nodes in the list is in the range [0, 200].
-100 <= Node.val <= 100
-200 <= x <= 200

*Solution*
1.Create a function partition, that accepts 2 arguments head and n
2.Create a new instance of linked list to a variable dummy
3.Create a new instance of linked list to a variable temp
4.Initialize a variable current to head
5.Initialize a variable fake to the linked list instance dummy
6.Initialize a variable node to the linked list instance temp.
7.while (current)
    if(current->data < n)
      update fake->next to current
      update fake to fake->next
    else
      update node->next = current
      update node to node->next
    update current to current->next
8.update node->next to null
9.update fake->next to temp->next
10.return dummy->next


14. *Reverse Linked list II*
Given the head of a singly linked list and two integers left and right where left <= right,
reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5],
left = 2,
right = 4 Output: [1,4,3,2,5]

Example 2:
Input: head = [5], left = 1, right = 1 Output: [5]

Constraints:
The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n


15. *Convert Sorted List to Binary*
Given the head of a singly linked list where elements are sorted in ascending order, convert it
to a height-balanced binary search tree.

Example 1:
Input: head = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null, 5]

Explanation:
One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.

Example 2:
Input: head = [] Output: []

Constraints:
The number of nodes in head is in the range [0, 2 * 104].
-105 <= Node.val <= 105


16. *Flatten Binary Tree to Linked List*
Given the root of a binary tree, flatten the tree into a "linked list":
The "linked list" should use the same TreeNode class where the right child pointer points to
the next node in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.

Example 1:
Input: root = [1,2,5,3,4,null, 6]
Output: [1,null,2,null,3,null,4,null,5,null,6]

Example 2:
Input: root = []
Output: []

Example 3:
Input: root = [0]
Output: [0]

Constraints:
The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100


17. *Populating Next Right Pointers in Each Node*
You are given a perfect binary tree where all leaves are on the same level, and every parent
has two children.

The binary tree has the following definition:
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
Initially, all next pointers are set to NULL.

Example 1:
Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#, 4,5,6,7,#]

Explanation:
Given the above perfect binary tree (Figure A), your function should populate each next
pointer to point to its next right node, just like in Figure B. The serialized output is in level
order as connected by the next pointers, with '#' signifying the end of each level.

Example 2:
Input: root = [] Output: []

Constraints:
The number of nodes in the tree is in the range [0, 212 - 1].
-1000 <= Node.val <= 1000

Follow-up:
You may only use constant extra space.
The recursive approach is fine. You ma assume implicit stack space does not count as extra
space for this problem.


18.*Populating Next Right Pointers in Each* Node II
Given a binary tree
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
Initially, all next pointers are set to NULL.

Example1:
Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#, 4,5,7,#]

Explanation:
Given the above binary tree (Figure A), your function should populate each next pointer to
point to its next right node, just like in Figure B. The serialized output is in level order as
connected by the next pointers, with '#' signifying the end of each level.

Example 2:
Input: root = []
Output: []

Constraints:
The number of nodes in the tree is in the range [0, 6000].
-100 <= Node.val <= 100

Follow-up:
You may only use constant extra space.
The recursive approach is fine. You may assume implicit stack space does not count as extra
space for this problem.


19. *Copy List with Random Pointer*
A linked list of length n is given such that each node contains an additional random pointer,
which could point to any node in the list, or null.
Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes,
where each new node has its value set to the value of its corresponding original node. Both
the next and random pointer of the new nodes should point to new nodes in the copied list such
that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for
the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.
The linked list is represented in the input/output as a list of n nodes. Each node is
represented as a pair of [val, random_index] where:
val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points
to, or null if it does not point to any node.
Your code will only be given the head of the original linked list.

Example 1:
Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

Example 2:
Input: head = [[1,1],[2,1]] Output: [[1,1],[2,1]]

Example 3:
Input: head = [[3,null],[3,0],[3,null]] Output: [[3,null],[3,0],[3,null]]


20. *Linked List Cycle*
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by
continuously following the next pointer. Internally, pos is used to denote the index of the node
that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [1,2],
pos = 0
Output: true

Explanation:
There is a cycle in the linked list, where the tail connects to the 0th node.

Example 2:
Input: head = [1],
pos = -1
Output: false

Explanation:
There is no cycle in the linked list.

Example 3:
Input: head = [3, 2, 0, -4]
pos = 1
Output: true

Explanation:
There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Constraints:
The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
Follow up: Can you solve it using O(1) (i.e. constant) memory?


21. *Linked List Cycle II*
Given the head of a linked list, return the node where the cycle begins. If there is no cycle,
return null.
There is a cycle in a linked list if there is some node in the list that can be reached again by
continuously following the next pointer. Internally, pos is used to denote the index of the node
that tail's next pointer is connected to (0-indexed). It is -1 
if there is no cycle. Note that pos is not passed as a parameter.
Do not modify the linked list.

Example 1:
Input:
head = [3,2,0,-4],
pos = 1
Output:
tail connects to node index 1

Explanation:
There is a cycle in the linked list, where tail connects to the second node.

Example 2:
Input:
head = [1,2], pos = 0
Output:
tail connects to node index 0

Explanation:
There is a cycle in the linked list, where tail connects to the first node.

Example 3:
Input: head = [1], pos = -1
Output: no cycle

Explanation:
There is no cycle in the linked list.

Constraints:
The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.


22. *Reorder List*
You are given the head of a singly linked-list. The list can be represented as:
L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

Constraints:
The number of nodes in the list is in the range [1, 5 * 104].
1 <= Node.val <= 1000


23. *Insertion Sort List*
Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.
The steps of the insertion sort algorithm:
Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location
it belongs within the sorted list and inserts it there.
It repeats until no input elements remain.
The following is a graphical example of the insertion sort algorithm. The partially sorted list
(black) initially contains only the first element in the list. One element (red) is removed from
the input data and inserted in-place into the sorted list with each iteration

Example 1:
Input: head = [4,2,1,3]
Output: [1,2,3,4]

Example 2:
Input: head = [-1,5,3,4,0] Output: [-1,0,3,4,5]

Constraints:
The number of nodes in the list is in the range [1, 5000].
-5000 <= Node.val <= 5000


24. *LRU Cache*
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
Implement the LRUCache class:
LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add
the key-value pair to the cache. If the number of keys exceeds the capacity from this
operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

Example 1:
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1); // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2); // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1); // return -1 (not found)
lRUCache.get(3); // return 3
lRUCache.get(4); // return 4

Constraints:
1 <= capacity <= 3000
0 <= key <= 104
0 <= value <= 105
At most 2 * 105 calls will be made to get and put.


25. *Sort List*
Given the head of a linked list, return the list after sorting it in ascending order.

Example 1:
Input: head = [4,2,1,3]
Output: [1,2,3,4]

Example 2:
Input: head = [-1,5,3,4,0] Output: [-1,0,3,4,5]

Example 3:
Input: head = []
Output: []

Constraints:
The number of nodes in the list is in the range [0, 5 * 104].
-105 <= Node.val <= 105
Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?


26. *Intersection of Two Linked Lists*
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.
If the two linked lists have no intersection at all, return null.
The test cases are generated such that there are no cycles anywhere in the entire linked structure.
Note that the linked lists must retain their original structure after the function returns.

*Custom Judge:*
The inputs to the judge are given as follows (your program is not given these inputs):
intersectVal - The value of the node where the intersection occurs. This is 0 if there is no
intersected node.
listA - The first linked list.
listB - The second linked list.
skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
The judge will then create the linked structure based on these inputs and pass the two
heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.

Example
Input: intersectVal = 8,
listA = [4,1,8,4,5],
listB = [5,6,1,8,4,5],
skipA = 2,
skipB = 3
Output: Intersected at '8'

Explanation:
The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [4,1,8,4,5].
From the head of B, it reads as [5,6,1,8,4,5].
There are 2 nodes before the intersected node in A;
There are 3 nodes before the intersected node in B.
- Note that the intersected node's value is not 1 because the nodes with value 1 in A and B
(2nd node in A and 3rd node in B) are different node references. In other words, they point
to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A
and 4th node in B) point to the same location in memory.

Example 2:
Input: intersectVal = 2,
listA = [1,9,1,2,4],
listB = [3,2,4],
skipA = 3,
skipB = 1
Output: Intersected at '2'

Explanation:
The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are
3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

Example 3:
Input: intersectVal = 0,
listA = [2,6,4],
listB = [1,5],
skipA = 3,
skipB = 2
Output: No intersection

Explanation:
From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5].
Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be
arbitrary values. Explanation: The two lists do not intersect, so return null.

Constraints:
The number of nodes of listA is in the m.
The number of nodes of listB is in the n.
1 <= m, n <= 3 * 104
1 <= Node.val <= 105
0 <= skipA < m
0 <= skipB < n
intersectVal is 0 if listA and listB do not intersect.
intersectVal == listA[skipA] == listB[skipB] if listA and listB intersect.
Follow up: Could you write a solution that runs in O(m + n) time and use only O(1) memory


27. *Remove Linked List Elements*
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has 
Node.val == val, and return the new head

Example 1:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Example 2:
Input: head = [], val = 1 Output: []

Example 3:
Input: head = [7,7,7,7], val = 7
Output: []

Constraints:
The number of nodes in the list is in the range [0, 104].
1 <= Node.val <= 50
0 <= val <= 50


28. *Reverse Linked*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]


29. *Palindrome Linked List*
Given the head of a singly linked list, return true if it is a palindrome or false otherwise

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false

Constraints:
The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9


30. *Delete Node in a Linked List*
There is a singly-linked list head and we want to delete a node node in it.
You are given the node to be deleted node. You will not be given access to the first node of head.
All the values of the linked list are unique, and it is guaranteed that
the given node node is not the last node in the linked list.
Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:
The value of the given node should not exist in the linked list.
The number of nodes in the linked list should decrease by one.
All the values before node should be in the same order.
All the values after node should be in the same order.

Custom testing:
For the input, you should provide the entire linked list head and the node to be given node.
node should not be the last node of the list and should be an actual node in the list.
We will build the linked list and pass the node to your function.
The output will be the entire list after calling your function.

Example 1:
Input: head = [4,5,1,9],
node = 5
Output: [4,1,9]

Explanation:
You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after
calling your function.

Example 2:
Input: head = [4,5,1,9],
node = 1
Output: [4,5,9]

Explanation:
You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after
calling your function.

Constraints:
The number of the nodes in the given list is in the range [2, 1000].
-1000 <= Node.val <= 1000
The value of each node in the list is unique.
The node to be deleted is in the list and is not a tail node


31.*Odd Even Linked List*
Given the head of a singly linked list, group all the nodes with odd indices 
together followed by the nodes with even indices, and return the reordered list.
The first node is considered odd, and the second node is even, and so on.
Note that the relative order inside both the even and odd groups should remain as it was in the input.
You must solve the problem in O(1) extra space complexity and O(n) time complexity.

Example 1:
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

Example 2:
Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]

Constraints:
The number of nodes in the linked list is in the range [0, 104].
-106 <= Node.val <= 106
