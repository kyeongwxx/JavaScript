// 인수가 유한수이면 true를 반환한다.
isFinite(0);
isFinite(2e64);
isFinite('10');
isFinite(null);

// 인수가 무한수로 평가되는 값이라면 false를 반환한다.
isFinite(Infinity);
isFinite(-Infinity);

// 인수가 NaN으로 평가되는 값이라면 false를 반환한다.
isFinite(NaN);
isFinite('Hello');
isFinite('2005/12/12');
