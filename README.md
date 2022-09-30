WebASM Linear Regression
========================

Simple scalar OLS linear regression in C, compiled to WebASM. Demo project to see how webasm compilation worked.

If you want to compile (optional):

1. [Install compiler](https://emscripten.org/docs/getting_started/downloads.html)
2. make clean all

If you want to run:
1. npm install .
2. node serve.js
3. navigate to http://localhost:3000/test.html

Will call:
```javascript
linreg.linreg([1, 2, 3], [2.02, 4.05, 5.97]))
linreg.linreg([1, 2, 3], [2.02, 4.05, 5.97], true)
```

Should print:
```
Hello world
{"m":1.9750003814697266,"b":0.06333541870117188}
{"m":2.002142906188965,"b":0}
```
