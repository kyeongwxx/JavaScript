function foo() {
    return
    {}
    // ASI의 동작 결과 -> return; {};
    // 개발자의 예측 -> return {};
}

console.log(foo()); // undefined

var bar = function() {}
(function() {})();
// ASI의 동작 결과 -> var bar = fucntion() {}(fucntion() {})();
// 개발자의 예측 -> var bar = fucntion() {}; (fucntion() {})();
// TypeError: (intermediate value)( ... ) is not a function