// MouseEvent 생성자 함수로 click 이벤트 타입의 커스텀 이벤트 객체를 생성
const customEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    clientX: 50,
    clientY: 100
});

console.log(customEvent.clientX);
console.log(customEvent.clientY);

// keyboardEvent 생성자 함수로 keyup 이벤트 타입의 커스텀 이벤트 객체를 생성
const keyboardEvent = new KeyboardEvent('keyup', { key: 'Enter'});

console.log(keyboardEvent.key);