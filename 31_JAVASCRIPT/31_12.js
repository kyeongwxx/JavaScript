const target = 'Is this all there is?';

// 'is' 문자열과 매치하는 패턴.
// 플래그가 g를 추가하면 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다.
const regExp = /is/ig;

// target과 정규 표현식의 매칭 결과를 구한다.
target.match(regExp);