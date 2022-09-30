var linreg = (function() {
  function ols_bias(x, y) {
    Module.ccall('ols_bias', 'number', ['number', 'number', 'number', 'number']);
    x = Float32Array.from(x)
    y = Float32Array.from(y)

    var x_buf = Module._malloc(x.length * x.BYTES_PER_ELEMENT);
    var y_buf = Module._malloc(y.length * y.BYTES_PER_ELEMENT);
    var out_buf = Module._malloc(2 * x.BYTES_PER_ELEMENT);
    try {
      Module.HEAPF32.set(x, x_buf >> 2);
      Module.HEAPF32.set(y, y_buf >> 2);
      Module.ccall('ols_bias', 'number', ['number', 'number', 'number', 'number'], [x_buf, y_buf, x.length, out_buf]);
      return {
        m: getValue(out_buf, "float"),
        b: getValue(out_buf + x.BYTES_PER_ELEMENT, "float"),
      };
    } finally {
      Module._free(x_buf);
      Module._free(y_buf);
      Module._free(out_buf);
    }
  }

  function ols_origin(x, y) {
    Module.ccall('ols_origin', 'number', ['number', 'number', 'number', 'number']);
    x = Float32Array.from(x)
    y = Float32Array.from(y)

    var x_buf = Module._malloc(x.length * x.BYTES_PER_ELEMENT);
    var y_buf = Module._malloc(y.length * y.BYTES_PER_ELEMENT);
    var out_buf = Module._malloc(1 * x.BYTES_PER_ELEMENT);
    try {
      Module.HEAPF32.set(x, x_buf >> 2);
      Module.HEAPF32.set(y, y_buf >> 2);
      Module.ccall('ols_origin', 'number', ['number', 'number', 'number', 'number'], [x_buf, y_buf, x.length, out_buf]);
      return {
        m: getValue(out_buf, "float"),
        b: 0.0,
      };
    } finally {
      Module._free(x_buf);
      Module._free(y_buf);
      Module._free(out_buf);
    }
  }

  function linreg(x, y, origin) {
    origin = !!origin;
    if (origin) {
      return ols_origin(x, y);
    } else {
      return ols_bias(x, y);
    }
  }
  
  return {linreg: linreg};
})();
