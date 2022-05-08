const mySymbol = Symbol();

// 불리언 타입으로는 암묵적으로 타입 변환된다.
console.log(!!mySymbol);

// if 문 등에서 존재 확인이 가능하다.
if(mySymbol) console.log('my Symbol is not empty.');