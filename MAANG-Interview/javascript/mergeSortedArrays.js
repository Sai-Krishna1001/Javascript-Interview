function mergeSortedArrays(arr1, arr2){
  const merge = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
      merge.push(arr1[i]);
      i++;
    }else{
      merge.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length){
    merge.push(arr1[i]);
    i++;
  }
  while(j < arr2.length){
    merge.push(arr2[j]);
    j++;
  }
  return merge;
}
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
let result = mergeSortedArrays(arr1, arr2);
console.log(result);
