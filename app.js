class Node {
  constructor(value, next) {
    this.value = value; // Some data that we stored in the link element
    this.next = next; // Pointer to the next element
  }
}

class linkedList {
  constructor(head) {
    this.head = null; // Pointer to the first element in the linked list
  }

  add(value) {
    let node = new Node(value),
      currentNode = this.head;
    
    // If we have empty list
    if (!currentNode) {
      this.head = node;
      return node;
    }

    // If list doesn't empty
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;

    return node;
  }
}
