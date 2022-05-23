// app.mjs
// 같은 폴내 내의 lib.mjs 모듈이 export한 식별자 이름으로 import한다.
// ESM의 경우 파일 확장자를 생략할 수 없다.
import { pi, square, Person } from './48_11.mjs';

console.log(pi);
console.log(square(10));
console.log(new Person('Lee'));