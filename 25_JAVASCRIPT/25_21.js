class Person {
    constructor(name) {
        this.name = name;

        // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
        return 100;
    }
}

const me = new Person('Lee');
console.log(me); // Person { name: 'Lee' }