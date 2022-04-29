// 클래스 선언문
class Person {
    // 생성자
    constructor(name) {
        // 인스턴스 생성 및 초기화
        this.name = name; // name 프로퍼티는 public하다.
    }

    // 프로토타입 메소드
    sayHi() {
        console.log(`Hi! My name is ${this.name}`);
    }

    // 정적 메소드
    static sayHello() {
        console.log('Hello!');
    }
}

// 인스턴스 생성
const me = new Person('Lee');

// 인스턴스의 프로퍼티 참조
console.log(me.name);
// 프로토타입 메소드 호출
me.sayHi();
// 정적 메소드 호출
Person.sayHello();