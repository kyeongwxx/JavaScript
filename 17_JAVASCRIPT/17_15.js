// 일반 함수 정의: 함수 선언문, 함수 표현식
function foo() {}
const bar = function() {};
// 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메소드로 인정하지 않는다.
const baz = {
    x: function() {}
};

// 일반 함수로 정의된 함수만이 constructor이다.
new foo();
new bar();
new baz.x();

// 화살표 함수 정의
const arrow = () => {};

new arrow(); // TypeError: arrow is not a constructor

// 메소드 정의: ES6의 메소드 축약 표현만 메소드로 인정한다.
const obj = {
    x() {}
};

new obj.x; // TypeError: obj.x is not a constructor