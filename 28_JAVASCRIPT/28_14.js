// 인수가 정상적인 유한수이면 true를 반환한다.
Number.isFinite(0);
Number.isFinite(Number.MAX_VALUE);
Number.isFinite(Number.MIN_VALUE);

// 인수가 무한수이면 false를 반환한다.
Number.isFinite(Infinity);
Number.isFinite(-Infinity);