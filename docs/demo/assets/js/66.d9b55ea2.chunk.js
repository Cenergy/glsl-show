(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{516:function(n,o,e){"use strict";e.r(o),o.default="#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 dd_resolution;\n\nvoid main() {\n  vec2 st = gl_FragCoord.xy / dd_resolution;\n  vec2 center = vec2(0.5);\n  float d = distance(st, center);\n  gl_FragColor.rgb = (1.0 - smoothstep(0.25, 0.26, d)) * vec3(1.0);\n  gl_FragColor.a = 1.0;\n}"}}]);