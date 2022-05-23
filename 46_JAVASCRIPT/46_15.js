// async 함수 선언문
async function foo(n) { return n; }
foo(1).then(v => console.log(v));

// async 함수 표현식
const bar = async function(n) { return n; };
bar(2).then(v => console.log(v));

// async 화살표 함수
const baz = async n => n;
baz(3).then(v => console.log(v));

// async 메소드
const obj = {
    async foo(n) { return n; }
};
obj.foo(4).then(v => console.log(v));

// async 클래스 메소드
class MyClass {
    async bar(n) { return n; }
}
const myClass = new MyClass();
myClass.bar(5).then(v => console.log(v));