// 이터러블이 아닌 유사 배열 객체
const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};

const arr = Array.prototype.slice.call(arrayLike);
console.log(Array.isArray(arr));