const str = 'Hello World';

// 첫 번째 인수 > 두 번째 인수인 경우 두 인수는 교환된다.
str.substring(4, 1);

// 인수 < 0 또는 NaN인 경우 0으로 취급된다.
str.substring(-2);

// 인수 > 문자열의 길이(str.length)인 경우 인수는 문자열의 길이로 취급된다.
str.substring(1, 100);
str.substring(20);