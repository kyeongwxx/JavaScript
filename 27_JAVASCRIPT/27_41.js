const arr = [1];

// push 메소드는 원본 배열(arr)을 직접 변경한다.
arr.push(2);
console.log(arr);

// concat 메소드는 원본 배열(arr)을 직접 변경하지 않고 새로운 배열을 생성하여 반환한다.
const result = arr.concat(3);
console.log(arr);
console.log(result);