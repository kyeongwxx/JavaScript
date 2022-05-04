const arr = [1, 2, 3, 4];

// 기본 구분자는 콤마다.
// 원본 배열 arr의 모든 요소를 문자열로 변환한 후 기본 구분자로 연결한 문자열을 반환한다.
arr.join();

// 원본 배열 arr의 모든 요소를 문자열로 변환한 후 빈 문자열로 연결한 문자열을 반환한다.
arr.join('');

// 원본 배열 arr의 모든 요소를 문자열로 변환한 후 구분자 ':'로 연결한 문자열을 반환한다.
arr.join(':');