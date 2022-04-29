// 수퍼클래스
class Base {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        return `Hi! ${this.name}`;
    }
}

// 서브클래스
class Derived extends Base {
    sayHi() {
        // __super는 Base.prototype을 가리킨다.
        const __super = Object.getPrototypeOf(Derived.prototype);
        return `${__super.sayHi.call(this)}. how are you doing?`;
    }
}

const derived = new Derived('Lee');
console.log(derived.sayHi());