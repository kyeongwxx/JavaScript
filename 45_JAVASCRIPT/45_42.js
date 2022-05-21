const wrongUrl = 'https://jsonplaceholder.typicode.com/XXX/1';

// 부적절한 URL이 지정되었기 때문에 404 Not Found 에러가 발생한다.
fetch(wrongUrl)
    .then(() => console.log('ok'))
    // json은 역직렬화된 HTTP 응답 몸체다.
    .catch(() => console.log('error'));