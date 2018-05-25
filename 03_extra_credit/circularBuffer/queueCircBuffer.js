function QueueCirc(num) {
  this.data = new Uint8Array(num);
  this.head = 0;
  this.tail = 0;
  this.fixedHead = 0;
  this.fixedTail = this.data.length;
}

QueueCirc.prototype.enqueue = function (val) {
  if (val < 0 || val > 255 || typeof (val) !== 'number' || this.tail - this.head === this.fixedTail) throw new Error()

  // if (this.tail !== this.fixedTail) {
  //   this.data[this.tail] = val;
  //   this.tail += 1;
  // } 
  if (this.tail === this.fixedTail) {
    if (!this.data[this.head - 1]) this.data[this.head - 1] = val;
    else throw new Error();
  } else {
    this.data[this.tail] = val;
    this.tail++;
  }

}

QueueCirc.prototype.dequeue = function () {

  if (this.tail === this.head) throw 'error empty';

  let removal = this.data[this.head];
  this.head++;
  this.data[this.head - 1] = null;
  return removal;

  // if (this.data[this.head]) {
  //   let removal = this.data[this.head];
  //   this.data[this.head] = 0;
  //   this.head += 1;
  //   return removal;
  // }

}