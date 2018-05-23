function Queue() {
  this.stack = [];
  this.magnitude = 0;
}

Queue.prototype.enqueue = function (item) {
  this.stack.push(item);
  this.magnitude += 1;
}

Queue.prototype.dequeue = function () {
  if (this.stack.length) {
    this.magnitude -= 1;
    return this.stack.shift();
  }
  else return undefined;
}

Queue.prototype.size = function () {
  return this.magnitude;
}