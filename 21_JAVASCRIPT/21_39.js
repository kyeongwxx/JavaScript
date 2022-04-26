var x = 10; // 전역 변수

function foo() {
    // 선언하지 않은 식별자에 값을 할당
    y = 20; // window.y = 20;
    console.log(x + y);
}

foo();

console.log(window.x);
console.log(window.y);

delete x; // 전역 변수는 삭제되지 않는다.
delete y; // 프로퍼티는 삭제된다.

console.log(window.x);
console.log(window.y);
