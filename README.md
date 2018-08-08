# Email builder with webpack
---
* inlined styles
* base64 images

## styles loaded via javascript

```javascript

var context = require.context("./css", true, /\.css$/);
var styles = {};

context.keys().forEach(function (key) {
   styles[key] = context(key);
});

```