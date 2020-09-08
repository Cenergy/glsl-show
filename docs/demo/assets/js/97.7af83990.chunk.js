(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{547:function(n,e,o){"use strict";o.r(e),e.default="#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 dd_resolution;\n\nfloat line_dist(vec2 p, vec2 l) {\n  float d = cross(vec3(p, 0.0), vec3(l, 0.0)).z / length(l);\n  return abs(d);\n}\n\nvoid main() {\n  vec2 st = gl_FragCoord.xy / dd_resolution;\n  vec2 line = vec2(0.5);\n  float d = line_dist(st, line);\n  gl_FragColor.rgb = step(0.01, d) * vec3(1.0);\n  gl_FragColor.a = 1.0;\n}"}}]);