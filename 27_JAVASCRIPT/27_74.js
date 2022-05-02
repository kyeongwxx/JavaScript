function sum() {
    // 이터러블을 배열로 변환(ES6 스프레드 문법)
    const arr = [...arguments];
    console.log(arr);

    return arr.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3));