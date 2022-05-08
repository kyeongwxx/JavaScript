const obj = {
    // 심벌 값으로 프로퍼티 키를 생성
    [Symbol.for('mySymbol')]: 1
};

for(const key in obj) {
    console.log(key);
}

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));