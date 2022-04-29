const obj = {
    // foo는 ES6의 메소드 축약 표현으로 정의한 메소드다. 따라서 [[HomeObject]]를 갖는다.
    foo() {},
    // bar는 ES6의 메소드 축약 표현으로 정의한 메소드가 아니라 일반 함수다.
    // 따라서 [[HomeObject]]를 갖지 않는다.
    bar: function() {}
};