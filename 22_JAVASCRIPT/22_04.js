// 생성자 함수
function Circle(radius) {
    // this는 메소드를 호출한 객체를 가리킨다.
    this.radius = radius;
}

Circle.prototype.getDiameter = function() {
    // this는 메소드를 호출한 객체를 가리킨다.
    return 2 * this.radius;
};

// 인스턴스를 생성
const circle = new Circle(5);
console.log(circle.getDiameter());