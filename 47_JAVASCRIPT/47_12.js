const foo = () => {
    throw Error('foo에서 발생한 에러');
};

const bar = () => {
    foo();
};

const baz = () => {
    bar();
};

try {
    baz();
} catch (error) {
    console.error(error);
}