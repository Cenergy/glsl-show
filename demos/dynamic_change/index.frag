#ifdef GL_ES
precision mediump float;
#endif

uniform float dd_time;

void main() {
	gl_FragColor = vec4(abs(sin(dd_time)),0.0,0.0,1.0);
}