### new topic


```js
var y = 10;

function bar() {
    // console.log(y);
  if (!y) {
    var y = 20;
  }
  console.log(y);
}

bar();

var y = 10;

function bar() {
    var y;
  if (!y) {
    var y = 20;
  }
  console.log(y);
}

bar();
```
