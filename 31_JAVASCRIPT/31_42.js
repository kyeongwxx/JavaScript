const target = 'abc#123';

// 특수 문자를 제거한다.
target.replace(/[^A-Za-z0-9]/gi, '');