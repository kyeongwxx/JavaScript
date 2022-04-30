class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        const that = this;
        return arr.map(function(item) {
            return that.prefix + item;
        }.bind(this)); // this에 바인딩된 값이 콜백 함수 내부의 this에 바인딩된다.
    }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));