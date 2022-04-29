// 생성자 함수
function Person(name) {
    this.name = name;
}

// 정적 메소드
Person.sayHi = function() {
    console.log('Hi!');
};

// 정적 메소드 호출
Person.sayHi();
