function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

const me = new Person('Lee');

// getName 메소드를 호출한 객체는 me이다.
console.log(me.getName());

Person.prototype.name = 'Kim';

// getName 메소드를 호출한 객체는 Person.prototype이다.
console.log(Person.prototype.getName());
