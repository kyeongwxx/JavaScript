var person = {
    'last-name': 'Lee',
    1: 10
};

person.'last-name';  // SyntaxError: Unexpected string
person.last-name;    // ReferenceError: name is not defined

person[last-name];   // ReferenceError: last is not defined
person['last-name']; // Lee

// 프로퍼티 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
person.1;            // SyntaxError: Unexpected Number
person.'1';          // SyntaxError: Unexpected string

person[1];           // 10 : person[1] -> person['1']
person['1'];         // 10