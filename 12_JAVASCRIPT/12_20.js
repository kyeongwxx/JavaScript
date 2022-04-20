function add(x, y) {
    console.log(arguments);
    // Arguments(3) [2, 5, 10, callee: f, Symbol(Symbol.iterator): f]

    return x + y;
}

console.log(add(2, 5, 10));