// 수퍼클래스
class Rectangle {
    constructor(width, height) {
        // 암묵적으로 빈 객체, 즉 인스턴스가 생성되고 this에 바인딩된다.
        console.log(this);
        // new 연산자와 함께 호출된 함수, 즉 new.target은 ColorRentangle이다.
        console.log(new.target);
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    toString() {
        return `width = ${this.width}, height = ${this.height}`;
    }
}

// 서브클래스
class ColorRectangle extends Rectangle {
    constructor(width, height, color) {
        super(width, height);
        this.color = color;
    }

    // 메소드 오버라이딩
    toString() {
        return super.toString() + `, color = ${this.color}`
    }
}

const colorRectangle = new ColorRectangle(2, 4, 'red');
console.log(colorRectangle);
// 상속을 통해 getArea 메소드를 호출
console.log(colorRectangle.getArea());
// 오버라이딩된 toString 메소드를 호출
console.log(colorRectangle.toString());
   