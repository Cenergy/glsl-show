(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{548:function(n,e,o){"use strict";o.r(e),e.default="#ifdef GL_ES\nprecision mediump float;\n#endif\n\n#pragma include <graphics>\n\nuniform vec2 dd_resolution;\n\nvoid main() {\n  vec2 st = gl_FragCoord.xy / dd_resolution;\n  vec2 line = vec2(0.5);\n  float d = sdf_line(st, line);\n  gl_FragColor.rgb = step(0.01, d) * vec3(1.0);\n  gl_FragColor.a = 1.0;\n}"}}]);