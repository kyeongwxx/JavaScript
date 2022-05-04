// 인수가 정수면 true를 반환한다.
Number.isInteger(0);
Number.isInteger(123);
Number.isInteger(-123);

// 0.5는 정수가 아니다.
Number.isInteger(0.5);
// '123'을 숫자로 암묵적 타입 변환하지 않는다.
Number.isInteger('123');
// false를 숫자로 암묵적 타입 변환하지 않는다.
Number.isInteger(false);
// Infinity/-Infinity는 정수가 아니다.
Number.isInteger(Infinity);
Number.isInteger(-Infinity);