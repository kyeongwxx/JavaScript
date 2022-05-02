// 유사 배열 객체는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고
// length 프로퍼티를 갖는 객체를 말한다.
const arrayLike = {
    '0' : 'apple',
    '1' : 'banana',
    '2' : 'orange',
    length: 3
};

// 유사 배열 객체는 마치 배열처럼 for 문으로 순회할 수도 있다.
for(let i = 0; i < arrayLike.length; i++) {
    console.log(arrayLike[i]);
}