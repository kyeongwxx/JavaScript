// 문자열은 원시 값이므로 변경할 수 없다.
const strObj = new String('Lee');

strObj[0] = 'S';
console.log(strObj);