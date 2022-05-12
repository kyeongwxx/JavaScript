Set.prototype.difference = function(set) {
    return new Set([...this].filter(v => !set.has(v)));
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA와 setB의 차집합
console.log(setA.difference(setB));
// setB와 setA의 차집합
console.log(setB.difference(setA));