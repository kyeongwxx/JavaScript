var foo = function() {
    return 1;
};

// 일반적인 함수로서 호출
foo();

// 생성자 함수로서 호출
new foo();

// 메소드로서 호출
var obj = { foo: foo };
obj.foo();