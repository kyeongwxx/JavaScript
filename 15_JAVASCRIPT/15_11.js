// 전역 변수
var x = 1;
// 암묵적 전역
y = 2;
// 전역 함수
function foo() {}

// var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다.
console.log(window.x);
// 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
console.log(x);

// 암묵적 전역은 전역 객체 window의 프로퍼티다.
console.log(window.y);
console.log(y);

// 함수 선언문으로 정의한 전역 변수는 전역 객체 window의 프로퍼티다.
console.log(window.foo);
// 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
console.log(foo);