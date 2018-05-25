function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function (val) {
  let node;

  if (!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
  } else {
    node = new Node(val, this.tail, null);
    this.tail.next = node;
    this.tail = node;
  }
}

LinkedList.prototype.addToHead = function (val) {
  let node;

  if (!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
  } else {
    node = new Node(val, null, this.head);
    this.head.previous = node;
    this.head = node;
  }
}

LinkedList.prototype.removeHead = function () {
  let node;
  if (this.head) node = this.head.value;
  else return undefined;

  if (this.head.next) {
    this.head = this.head.next;
    this.head.previous = null;
  } else {
    this.head = null;
    this.tail = null;
  }

  return node;
}

LinkedList.prototype.removeTail = function () {
  let node;
  if (this.tail) node = this.tail.value;
  else return undefined;

  if (this.tail.previous) {
    this.tail = this.tail.previous;
    this.tail.next = null;
  } else {
    this.head = null;
    this.tail = null;
  }
  return node;
}


LinkedList.prototype.search = function (val) {
  let current = this.head;

  while (current) {
    if (typeof (val) === 'string') {
      if (current.value === val) return val;
    } else {
      if (val(current.value)) return current.value;
    }
    current = current.next;
  }
  return null;
}

function Node(val, previous = null, next = null) {
  this.value = val;
  this.previous = previous;
  this.next = next;
}