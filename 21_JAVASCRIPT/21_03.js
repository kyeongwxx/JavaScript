// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(1.5);

// toFixed는 Number.prototype의 프로토타입 메소드다.
// Number.prototype.toFixed는 소수점 자리를 반올림하여 문자열로 반환한다.
console.log(numObj.toFixed());

// isInteger은 Number의 정적 메소드다.
// Number.Integer는 인수가 정수(integer)인지 검사하여 그 결과를 Boolean으로 반환한다.
console.log(Number.isInteger(0.5));