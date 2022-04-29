// 생성자 함수
function Person(name) {
    this.name = name;
}

// 프로토타입 메소드
Person.prototype.sayHi = function() {
    console.log(`Hi! My nams is ${this.name}`);
};

const me = new Person('Lee');
me.sayHi();