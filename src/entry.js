var context = require.context("./css", true, /\.css$/);
var styles = {};

context.keys().forEach(function (key) {
   styles[key] = context(key);
});

console.log('building it...', styles);