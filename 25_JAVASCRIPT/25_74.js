// 수퍼클래스
class Rectangle {
    constructor(width, height) {
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