const obj = {
    x: 1,
    // foo는 메소드다
    foo() { return this.x; },
    // bar에 바인딩된 함수는 메소드가 아닌 일반 함수다.
    bar: function() { return this.x; }
};

console.log(obj.foo());
console.log(obj.bar());

new obj.foo(); // TypeError: obj.foo is not a constructor
new obj.bar(); // bar {}