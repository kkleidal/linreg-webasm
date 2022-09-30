WebASM Linear Regression
========================

Just wanted to do this quick project to see what it was like compiling C to webasm and wrapping with javascript.

If you want to compile (optional):

1. [Install compiler](https://emscripten.org/docs/getting_started/downloads.html)
2. make clean install

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
