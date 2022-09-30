#include <math.h>
#include <stdlib.h>

extern "C" {

static inline void invert_symmetric(float a, float b, float d, float *ai, float *bi, float* di) {
    float scale = 1 / (a * d - b * b);
    *ai = d * scale;
    *bi = -b * scale;
    *di = a * scale;
}

void ols_bias(float* x, float* y, int n, float* outputs) {
    float A00 = 0;
    float A01 = 0;
    for (int i = 0; i < n; ++i) {
        A00 += x[i] * x[i];
    }
    for (int i = 0; i < n; ++i) {
        A01 += x[i];
    }
    float A11 = float(n);

    float a00, a01, a11;
    invert_symmetric(A00, A01, A11, &a00, &a01, &a11);

    float c0 = 0;
    float c1 = 0;
    for (int i = 0; i < n; ++i) {
        c0 += x[i] * y[i];
    }
    for (int i = 0; i < n; ++i) {
        c1 += y[i];
    }
    float m = c0 * a00 + c1 * a01;
    float b = c0 * a01 + c1 * a11;
    outputs[0] = m;
    outputs[1] = b;
}

void ols_origin(float* x, float* y, int n, float* outputs) {
    float A00 = 0;
    for (int i = 0; i < n; ++i) {
        A00 += x[i] * x[i];
    }

    float a00 = 1.0f / A00;

    float c0 = 0;
    for (int i = 0; i < n; ++i) {
        c0 += x[i] * y[i];
    }
    float m = c0 * a00;
    outputs[0] = m;
}

}
