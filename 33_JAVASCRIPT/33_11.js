// enum은 명명된 숫자 상수의 집합으로 열거형이라고 부른다.
// JavaScript enum
// Direction 객체는 불변 객체이며 프로퍼티 값은 유일무이한 값이다.
// 자바스크립트에서 enum을 사용하려면 객체의 변경을 방지하기 위해 객체를 동결하는 Object.freeze 메소드와
// 심벌 값을 사용한다.
const Direction = Object.freeze ({
    UP: Symbol('up'),
    DOWN: Symbol('down'),
    LEFT: Symbol('left'),
    RIGHT: Symbol('right')
});

const myDirection = Direction.UP;

if(myDirection === Direction.UP) {
    console.log('You are going UP.');
}