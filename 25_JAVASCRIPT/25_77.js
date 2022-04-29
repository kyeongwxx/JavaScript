// 수퍼클래스
class Rectangle {
    constructor(width, height) {
        // 암묵적으로 빈 객체, 즉 인스턴스가 생성되고 this에 바인딩된다.
        console.log(this);
        // new 연산자와 함께 호출된 함수, 즉 new.target은 ColorRectangle이다.
        console.log(new.target);

        // 생성된 인스턴스의 프로토타입으로 ColorRectangle.prototype이 설정된다.
        console.log(Object.getPrototypeOf(this) === ColorRectangle.prototype);
        console.log(this instanceof ColorRectangle);
        console.log(this instanceof Rectangle);
        
        // 인스턴스 초기화
        this.width = width;
        this.height = height;

        console.log(this);
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