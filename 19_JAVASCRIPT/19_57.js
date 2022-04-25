// Object.create는 정적 메소드다.
const obj = Object.create({ name: 'Lee' });

// Object.prototype.hasOwnProperty는 프로토타입 메소드다.
obj.hasOwnProperty('name');