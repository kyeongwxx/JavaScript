function Person(name) {
    this.name = name;
}

// 프로토타입 메소드
Person.prototype.sayHello = function() {
    console.log(`Hi My name is ${this.name}`);
};

const me = new Person('Lee');

// hasOwnProperty는 Object.prototype의 메소드이다.
console.log(me.hasOwnProperty('name'));

// me 객체는 프로토타입 체인을 따라 hasOwnProperty 메소드를 검색하여 사용한다.
me.hasOwnProperty('name');