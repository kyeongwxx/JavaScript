// 배열의 중복 요소 제거
const uniq1 = array => array.filter((v, i, self) => self.indexOf(v) === i);
console.log(uniq1([2, 1, 2, 3, 4, 3, 4]));

// Set을 사용한 배열의 중복 요소 제거
const uniq2 = array => [...new Set(array)];
console.log(uniq2([2, 1, 2, 3, 4, 3, 4]));