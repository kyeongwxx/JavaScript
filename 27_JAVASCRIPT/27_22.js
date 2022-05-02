const arr = new Array(10);

console.log(arr);
console.log(arr.length);

console.log(Object.getOwnPropertyDescriptors(arr));
/*
{
  length: { value: 10, writable: true, enumerable: false, configurable: false }
}
*/