const Person = (function() {
    let _age = 0; // private

    // 생성자 함수
    function Person(name, age) {
        this.name = name; // public
        _age = age;
    }

    // 프로토타입 메소드
    Person.prototype.sayHi = function() {
        console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
    };

    // 생성자 함수를 반환
    return Person;
}());

const me = new Person('Lee', 20);
me.sayHi();

const you = new Person('Kim', 30);
you.sayHi();

me.sayHi();