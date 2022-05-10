// 이터러블이면서 이터레이터인 객체를 반환하는 함수
const fibonacciFunc = function(max) {
    let [pre, cur] = [0, 1];

    // Symbol.iterator 메소드와 next 메소드를 소유한 이터러블이면서 이터레이터인 객체를 반환
    return {
        [Symbol.iterator]() { return this; },
        // next 메소드는 이터레이터 리절트 객체를 반환
        next() {
            [pre, cur] = [cur, pre + cur];
            return { value: cur, done: cur >= max };
        }
    };
};

// iter는 이터러블이면서 이터레이터다.
let iter = fibonacciFunc(10);

// iter는 이터러블이므로 for...of 문으로 순회할 수 있다.
for(const num of iter) {
    console.log(num);
}

// iter는 이터러블이면서 이터레이터다.
iter = fibonacciFunc(10);

// iter는 이터레이터이므로 이터레이션 리절트 객체를 반환하는 next 메소드를 소유한다.
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());