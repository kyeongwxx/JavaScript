function foo(...rest = []) {
    console.log(rest);
}
// Uncaught SyntaxError: Rest parameter may not have a default initializer