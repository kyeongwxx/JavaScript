const promiseGet = url => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onload = () => {
            if(xhr.status === 200) {
                // 성공적으로 응답을 전달받으면 resolve 함수를 호출한다.
                resolve(JSON.parse(xhr.response));
            } else {
                // 에러 처리를 위해 reject 함수를 호출한다.
                reject(new Error(xhr.status));
            }
        };
    });
};

// 부적절한 URL이 지정되었기 때문에 에러가 발생한다.
promiseGet('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.xxx(res))
    .catch(err => console.error(err)); // console.xxx is not a function