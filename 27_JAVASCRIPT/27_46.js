const arr = [1, 2];

// 인수로 전달받은 모든 값을 원본 배열 arr의 마지막 요소로 추가하고 변경된 length 프로퍼티 값을 반환한다.
let result = arr.push(3, 4);
console.log(result);

// push 메소드는 원본 배열을 직접 변경한다.
console.log(arr);