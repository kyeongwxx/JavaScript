Set.prototype.union = function(set) {
    return new Set([...this, ...set]);
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA와 setB의 합집합
console.log(setA.union(setB));
// setB와 setA의 합집합
console.log(setB.union(setA));