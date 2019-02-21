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


let node1 = new Node();
let node2 = new Node();
let linkedList1 = new linkedList();
linkedList1.add("node1");
linkedList1.add("node2");
linkedList1.add("node3");
linkedList1.add("node4");
linkedList1.add("node5");
console.log(linkedList1);
