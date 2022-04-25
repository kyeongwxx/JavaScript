const Person = (function (){
    // 생성자 함수
    function Person(name) {
        this.name = name;
    }

    // 프로토타입 메소드
    Person.prototype.sayHello = function() {
        console.log(`Hi! My name is ${this.name}`);
    };

    // 생성자 함수를 반환
    return Person;
}());

const me = new Person('Lee');

// 인스턴스 메소드
me.sayHello = function() {
    console.log(`Hey! My name is ${this.name}`);
};

// 인스턴스 메소드가 호출된다. 프로토타입 메소드는 인스턴스 메소드에 의해 가려진다.
me.sayHello();

// 인스턴스 메소드를 삭제한다.
delete me.sayHello;
// 인스턴스에는 sayHello 메소드가 없으므로 프로토타입 메소드가 호출된다.
me.sayHello();