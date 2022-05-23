// DOM에 button 요소가 존재하지 않으면 querySelector 메소드는 에러를 발생시키지 않고 null을 반환한다.
const $button = document.querySelector('button'); // null

$button.classList.add('disabled');
// Uncaught TypeError: Cannot read properties of null (reading 'classList')