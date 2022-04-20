// 유사 배열 객체(array-like object)
// 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 length 프로퍼티를 갖는 객체를 말한다. 문자열은 마치 배열처럼
// 인덱스를 통해 각 문자에 접근할 수 있으며, length 프로퍼티를 갖기 때문에 유사 배열 객체이고 for문으로 순회할 수도 있다.
var str = 'string';

// 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
console.log(str[0]);

// 원시 값인 문자열이 객체처럼 동작한다.
console.log(str.length);
console.log(str.toUpperCase());