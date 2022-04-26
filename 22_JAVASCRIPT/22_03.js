// 객체 리터럴
const circle = {
    radius: 5,
    getDiameter() {
        // this는 메소드를 호출한 객체를 가리킨다.
        return 2 * this.radius;
    }
};

console.log(circle.getDiameter());