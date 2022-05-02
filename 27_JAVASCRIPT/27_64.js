const arr = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 모든 요소를 제거한다.
const result = arr.splice(1);

// 제거한 요소가 배열로 반환된다.
console.log(result);
// splice 메소드는 원본 배열을 직접 변경한다.
console.log(arr);