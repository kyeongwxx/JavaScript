// Array 생성자 함수를 상속받아 확장한 MyArray
class MyArray extends Array {
    // 중복된 배열 요소를 제거하고 반환한다: [1, 1, 2, 3] => [1, 2, 3]
    uniq() {
        return this.filter((v, i, self) => self.indexOf(v) === i);
    }

    // 모든 배열 요소의 평균을 구한다: [1, 2, 3] => 2
    average() {
        return this.reduce((pre, cur) => pre + cur, 0) / this.length;
    }
}

const myArray = new MyArray(1, 1, 2, 3);
console.log(myArray);

// MyArray.prototype.uniq 호출
console.log(myArray.uniq());
// MyArray.prototype.average
console.log(myArray.average());

console.log(myArray.filter(v => v % 2) instanceof MyArray);

// 메소드 체이닝
// [1, 1, 2, 3] => [1, 1, 3] => [1, 3] => 2
console.log(myArray.filter(v => v % 2).uniq().average());

