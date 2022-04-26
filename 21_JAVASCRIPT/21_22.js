// 숫자
isNaN(NaN);
isNaN(10);

// 문자열
isNaN('blabla');
isNaN('10');
isNaN('10.12');
isNaN('');
isNaN(' ');

// 불리언
isNaN(true);
isNaN(null);

// undefined
isNaN(undefined);

// 객체
isNaN({});

// date
isNaN(new Date());
isNaN(new Date().toString());