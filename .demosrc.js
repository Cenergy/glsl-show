module.exports = function(env) {
  return {
    devServer: {
      port: 3030,
    },
    output: {
      dir: 'release/build',
      publicUrl: '.',
    },
    staticFolder: env === 'development' ? 'dist': null,
    themeFile: 'demos/theme.scss',
    // demoList: env === 'development' ? '.demoList.dev.json': '.demoList.prod.json',
    name: '在线GLSL',
    version: 'next',
    homePage: global.top == null || global.top === global ? 'http://www.aigisss.com/' : location.href,
    logo: '',
    // 可选主题: active4d, allHallowsEve, amy, blackboard, brillianceBlack,
    // brillianceDull, chromeDevtools, cloudsMidnight, clouds, cobalt,
    // dawn, dreamweaver, eiffel, espressoLibre, github, idle, katzenmilch,
    // kuroirTheme, lazy, magicwbAmiga, merbivoreSoft, merbivore, monokai,
    // pastelsOnDark, slushAndPoppies, solarizedDark, solarizedLight,
    // spacecadet, sunburst, textmateMacClassic, tomorrowNightBlue,
    // tomorrowNightBright, tomorrowNightEighties, tomorrowNight, tomorrow,
    // twilight, vibrantInk, zenburnesque, iplastic, idlefingers, krtheme,
    // monoindustrial,
    boxTheme: 'monokai',
    globalPackages: {
      js: [env === 'development' ? '/glsl-doodle.js': '/glsl/js/glsl-doodle.js'],
      css: [],
    },
    // tab waterfall
    editorViewMode: 'tab',
  };
};
