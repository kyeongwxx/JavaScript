const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

const map = new Map([[lee, 'developer'], [kim, 'designer']]);

// Map.prototype.keys는 Map 객체에서 요소키를 값으로 갖는 이터러블이면서 동시에 이터레이터를 반환한다.
for(const key of map.keys()) {
    console.log(key);
}

// Map.prototype.values는 Map 객체에서 요소값을 값으로 갖는 이터러블이면서 동시에 이터레이터를 반환한다.
for(const key of map.values()) {
    console.log(key);
}

// Map.prototype.entries는 Map 객체에서 요소키와 요소값을 값으로 갖는 이터러블이면서 동시에 이터레이터를 반환한다.
for(const key of map.entries()) {
    console.log(key);
}