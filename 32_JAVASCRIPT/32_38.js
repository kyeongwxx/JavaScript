const str = 'How are you doing?';

str.split(' '); // (4) ['How', 'are', 'you', 'doing?']

str.split(/\s/); // (4) ['How', 'are', 'you', 'doing?']

str.split('');
// (18) ['H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', ' ', 'd', 'o', 'i', 'n', 'g', '?']

str.split(); // ['How are you doing?']