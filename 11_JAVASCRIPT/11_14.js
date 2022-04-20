// 객체를 프로퍼티 값으로 갖는 객체의 경우
// 얕은 복사는 한 단계까지만 복사하는 것을 말하고
// 깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사하는 것을 말한다.

const o = {
    x: { y: 1 }
};

// 얕은 복사
const c1 = { ...o };
console.log(c1 === o);
console.log(c1.x === o.x);

// lodash의 cloneDeep을 사용한 깊은 복사
const _ = require('lodash');
// 깊은 복사
const c2 = _.cloneDeep(o);
console.log(c2 === o);
console.log(c2.x === o.x);

