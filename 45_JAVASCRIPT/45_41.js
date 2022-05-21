fetch('https://jsonplaceholder.typicode.com/todos/1')
    // response는 HTTP 응답을 나타내는 Response 객체다.
    // json 메소드를 사용하여 Response 객체에서 HTTP 응답 몸체를 취득하여 역직렬화한다.
    .then(response => response.json())
    // json은 역직렬화된 HTTP 응답 몸체다.
    .then(json => console.log(json));