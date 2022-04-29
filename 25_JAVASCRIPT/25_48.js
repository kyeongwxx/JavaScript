class Person {
    constructor(name) {
        this.name = name; // 인스턴스 프로퍼티는 기본적으로 public이다.
    }
}

const me = new Person('Lee');
console.log(me.name);