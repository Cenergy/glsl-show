(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{521:function(n,e,o){"use strict";o.r(e),e.default="#ifdef GL_ES\nprecision mediump float;\n#endif\n\n#pragma include <graphics>\n\nuniform vec2 dd_resolution;\n\nfloat f(float x) {\n  // return sin(x * 2.0 * PI);\n  // return cos(x * 2.0 * PI);\n  // return 2.0 * x;\n  // return 0.1 / (x + 0.02);\n  // return smoothstep(0.1, 0.9, x);\n  return x * x;\n}\n\nvoid main() {\n  vec2 st = gl_FragCoord.xy / dd_resolution;\n  float x = st.x;\n  float d1 = sdf_line(\n    st, \n    vec2(x - 0.01, f(x - 0.01)), \n    vec2(x, f(x))\n  );\n  float d2 = sdf_line(\n    st, \n    vec2(x, f(x)), \n    vec2(x + 0.01, f(x + 0.01))\n  );\n  float d = min(d1, d2);\n  gl_FragColor.rgb = (step(-0.005, d) - step(0.005, d)) * vec3(1.0);\n  gl_FragColor.a = 1.0;\n}"}}]);