// 피보나치 수열을 구현한 사용자 정의 이터러블
const fibonacci = {
    // Symbol.iterator 메소드를 구현하여 이터러블 프로토콜을 준수한다.
    [Symbol.iterator]() {
        let [pre, cur] = [0, 1];
        const max = 10; // 수열의 최대값

        // Symbol.iterator 메소드는 next 메소드를 소유한 이터레이터를 반환해야 하고
        // next 메소드는 이터레이터 리절트 객체를 반환해야 한다.
        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                // 이터레이터 리절트 객체를 반환한다.
                return { value: cur, done: cur >= max};
            }
        };
    }
};

// 이터러블인 fibonacci 객체를 순회할 때마다 next 메소드가 호출된다.
for(const num of fibonacci) {
    console.log(num);
}