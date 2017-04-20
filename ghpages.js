var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, 'gh'), function (err) {
  if (err) { console.log("error:", err) } else { console.log("Uploaded to github") }
});
