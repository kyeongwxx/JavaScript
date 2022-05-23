// app.mjs
// lib.mjs 모듈이 export한 식별자 이름을 변경하여 import한다.
import { pi as PI, square as sq, Person as P } from './48_11.mjs';

console.log(PI);
console.log(sq(2));
console.log(new P('Kim'));