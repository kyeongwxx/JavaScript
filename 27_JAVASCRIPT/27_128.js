// 배열의 요소 중 10보다 큰 요소가 1개 이상 존재하는지 확인
[5, 10, 15].some(item => item > 10);

// 배열의 요소 중 0보다 작은 요소가 1개 이상 존재하는지 확인
[5, 10, 15].some(item => item < 0);

// 배열의 요소 중 'banana'가 1개 이상 존재하는지 확인
['apple', 'banana', 'mango'].some(item => item === 'banana');

// some 메소드를 호출한 배열이 빈 배열인 경우 언제나 false를 반환한다.
[].some(item => item > 3);