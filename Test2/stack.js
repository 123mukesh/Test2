let data = [];
let currentSize = data.length;
let max = 5;

function push(newVal) {
  if (currentSize >= max) {
    console.log("stack is full you can not add stack :" + newVal);
  }
  data[currentSize] = newVal;
  currentSize += 1;
}
function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    data.length = currentSize;
  } else {
    console.log("stack is already empty");
  }
}

// push(20);
// push(10);
// push(30);
// push(40);
// push(50);
// pop();
// pop();
// pop();
// push(60);
// push(70);

while (true) {
  var operation = prompt("Enter 'push', 'pop', or 'exit':");

  if (operation === "push") {
    var item = prompt("Enter item to push:");
    push(item);
  } else if (operation === "pop") {
    pop();
  } else if (operation === "exit") {
    break;
  } else {
    console.log("Invalid operation. Please enter 'push', 'pop', or 'exit'.");
  }
}

console.log(data);
