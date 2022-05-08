const str = 'hello world';

// substring과 slice 메소드는 동일하게 동작한다.
// 0번째부터 5번째 이전 문자까지 잘라내어 반환
str.substring(0, 5);
str.slice(0, 5);

// 인덱스가 2인 문자부터 마지막 문자까지 잘라내어 반환
str.substring(2);
str.slice(2);

// 인수 < 0 또는 NaN인 경우 0으로 취급된다.
str.substring(-5);
// slice 메소드는 음수인 인수를 전달할 수 있다. 뒤에서 5자리를 잘라내어 반환한다.
str.slice(-5);