(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{525:function(n,d,e){"use strict";e.r(d),d.default='<glsl-doodle for="myDoodle" width="256" height="256"></glsl-doodle>\n<script id="myDoodle" type="x-shader/x-fragment">\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform float dd_frameIndex;\n\nvoid main() {\n  gl_FragColor = (0.5 + 0.5 * sin(0.05 * dd_frameIndex)) * vec4(1, 0, 0, 1);\n}\n<\/script>'}}]);