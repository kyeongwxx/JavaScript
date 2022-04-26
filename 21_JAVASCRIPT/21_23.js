// 문자열을 실수로 해석하여 반환한다.
parseFloat('3.14');
parseFloat('10.00');

// 공백으로 구분된 문자열은 첫 번째 문자열만 변환한다.
parseFloat('34 45 66');
parseFloat('40 years');

// 첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다.
parseFloat('He was 40');

// 앞 뒤 공백은 무시된다
parseFloat(' 60 ');
