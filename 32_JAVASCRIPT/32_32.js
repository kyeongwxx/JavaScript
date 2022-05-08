const str = 'abc'

str.repeat();
str.repeat(0);
str.repeat(1);
str.repeat(2);
str.repeat(2.5);
str.repeat(-1); // Uncaught RangeError: Invalid count value