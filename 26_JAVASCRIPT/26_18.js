const create1 = (id, content) => ({ id, content });
create1(1, 'JavaScript');

// 위 표현은 다음과 동일하다
const create2 = (id, content) => { return { id, content }; };