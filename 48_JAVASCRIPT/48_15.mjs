// app.mjs
// lib.mjs 모듈이 export한 모든 식별자를 lib 객체의 프로퍼티로 모아 import한다.
import * as lib from './48_11.mjs';

console.log(lib.pi);
console.log(lib.square(10));
console.log(new lib.Person('Lee'));