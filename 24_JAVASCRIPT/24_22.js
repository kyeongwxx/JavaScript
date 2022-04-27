const funcs = [];

for(let i = 0; i < 3; i++) {
    funcs[i] = function() { return i; };
}

for(var j = 0; j < funcs.length; j++) {
    console.log(funcs[j]()); // 0 1 2
}