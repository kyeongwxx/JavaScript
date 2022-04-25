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

Object.prototype.hasOwnProperty.call(me, 'name');