var config = require('hjs-webpack')

module.exports = config({
  in: 'src/app.js',
  out: 'public',
  isDev: process.env.NODE_ENV !== 'production',
  hostname: 'vijay.local',
  html: function (data) {
    return {
      'index.html': [
        '<html>',
        '<head>',
        '<link href="' + data.css + '" rel="stylesheet" type="text/css" />',
        '</head>',
        '<body>',
        '<div id="app"></div>',
        '<script src="' + data.main + '"></script>',
        '</body>',
        '</html>'
      ].join('')
    }
  }
})
