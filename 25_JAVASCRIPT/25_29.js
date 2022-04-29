class Square {
    // 정적 메소드
    static area(width, height) {
        return width * height;
    }
}

console.log(Square.area(10, 10));