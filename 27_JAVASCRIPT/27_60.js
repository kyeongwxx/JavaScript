let result = [1, 2].concat([3, 4]);
console.log(result);

// concat 메소드는 ES6의 스프레드 문법으로 대체할 수 있다.
result = [...[1, 2], ...[3, 4]];
console.log(result);