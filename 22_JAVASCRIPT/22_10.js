var value = 1;

const obj = {
    value: 100,
    foo() {
        console.log("foo's this: ", this);
        // 콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
        setTimeout(function() {
            console.log("callback's this: ", this);
            console.log("callback's this.value: ", this);
        }, 100);
    }
};

obj.foo();