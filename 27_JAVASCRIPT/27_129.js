// 배열의 모든 요소가 3보다 큰지 확인
[5, 10, 15].every(item => item > 3);

// 배열의 모든 요소가 10보다 큰지 확인
[5, 10, 15].every(item => item > 10);

// every 메소드를 호출한 배열이 빈 배열인 경우 언제나 true 반환한다.
[].every(item => item > 3);