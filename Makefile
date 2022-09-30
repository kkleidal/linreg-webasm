.PHONY: all clean

all: linreg.html

linreg.html: linreg.cpp
	emcc $< -o $@ -sEXPORTED_FUNCTIONS=_ols_bias,_ols_origin,_malloc,_free -sEXPORTED_RUNTIME_METHODS=ccall,cwrap
	bash -c "cat <(head -n1 wrapper.js) linreg.js <(tail -n +2 wrapper.js) >linreg2.js"
	mv linreg2.js linreg.js
	$(RM) linreg.html

clean:
	$(RM) -f linreg.html linreg.js linreg.wasm linreg2.js
