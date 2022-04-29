class Person {
    // 생성자
    constructor(name) {
        // 인스턴스 생성 및 초기화
        this.name = name;
    }

    // 정적 메소드
    static sayHi() {
        console.log('Hi!')
    }
}

// 정적 메소드는 클래스로 호출한다.
// 정적 메소드는 인스턴스 없이도 호출할 수 있다.
Person.sayHi();