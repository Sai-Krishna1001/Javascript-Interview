## Implement the myMap, myFilter, and myReduce functions

### myMap function
```js
Array.prototype.myMap = function(callback){
    let result = [];
    for(let i=0; i<this.length; i++){
        if(this.hasOwnProperty(i)){
            result.push(callback(this[i], i, this));
        }
    }
    return result;
}
```

### myFilter function
```js
Array.prototype.myFilter = function(callback){
    let result = [];
    for(let i=0; i<this.length; i++){
        if(this.hasOwnproperty(i) && callback(this[i], i, this)){
            result.push(this[i]);
        }
    }
    return result;
}
```
### myReduce function
```js
Array.prototype.myReduce = function(callback, initialValue){
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = intialValue !== undefined ? 0 : 1;

    for(let i=startIndex; i<this.length; i++){
        if(this.hasOwnProperty(i)){
            accumulator = callback(accumulator, this[i], i, this);
        }
    }
    return accumulator;
}
```
