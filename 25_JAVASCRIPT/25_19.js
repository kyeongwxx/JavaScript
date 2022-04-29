class Person {
    constructor(name, address) {
        // 고정값으로 인스턴스 초기화
        this.name = name;
        this.address = address;
    }
}

// 인스턴스 프로퍼티가 추가된다.
const me = new Person('Lee', 'Seoul');
console.log(me); // Person { name: 'Lee', address: 'Seoul' }