var i = 10;

// for문에서 선언한 i는 전역 변수다. 이미 선언한 전역 변수 i가 있으므로 중복 선언된다.
for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);