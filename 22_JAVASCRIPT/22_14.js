const person = {
    name: 'Lee',
    getName() {
        // 메소드 내부의 this는 메소드를 호출한 객체에 바인딩된다.
        return this.name;
    }
};

// 메소드 getName을 호출한 객체는 person이다.
console.log(person.getName());