const person = { name: 'Lee' };

// person 객체는 밀봉된 객체가 아니다.
console.log(Object.isSealed(person));

// person 객체를 밀봉하여 프로퍼티 추가, 삭제, 재정의를 금지한다.
Object.seal(person);

// person 객체는 밀봉된 객체다.
console.log(Object.isSealed(person));

// 밀봉된 객체는 configurable이 false다.
console.log(Object.getOwnPropertyDescriptors(person));
// name: {value: 'Lee', writable: true, enumerable: true, configurable: false}

// 프로퍼티 추가가 금지된다.
person.age = 20;
console.log(person);

// 프로퍼티 삭제가 금지된다.
delete person.name;
console.log(person);

// 프로퍼티 값 갱신은 가능하다.
person.name = 'Kim';
console.log(person);

// 프로퍼티 어트리뷰트 재정의가 금지된다.
Object.defineProperty(person, 'name', { configurable: true});
// TypeError: Cannot redefine property: name
