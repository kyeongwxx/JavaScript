// 수퍼클래스
class Base {
    constructor() {}
}

// 서브클래스
class Derived extends Base {
    constructor(...args) { super(...args); }
}

const derived = new Derived();
console.log(derived);