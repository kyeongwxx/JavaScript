const target = 'Is this all there is?';

// 'is' 문자열과 매치하는 패턴. 플래그가 i를 추가하면 대소문자를 구별하지 않는다.
const regExp = /is/i;

// target과 정규 표현식의 매칭 결과를 구한다.
target.match(regExp);