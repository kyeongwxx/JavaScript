const arr = [1, 2, 3];

// arr[0]부터 arr[1] 이전까지 복사하여 반환한다.
arr.slice(0, 1);

// arr[1]부터 arr[2] 이전까지 복사하여 반환한다.
arr.slice(1, 2);

// 원본은 변경되지 않는다.
console.log(arr);