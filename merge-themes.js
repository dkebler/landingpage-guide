'use strict'

var merge = require('merge-dirs');
var watch = require('watch');

var itheme = "lp-theme"
var ithemes = ["landingpage-flex-hugo-theme", "hugo-easy-gallery"]
watchThemes(itheme, ithemes)

function watchThemes(theme, themes) {
  themes.forEach((dir) => watch.watchTree(`themes/${dir}`, (f) => {
    mergeThemes(theme, [dir])
  }))
}

function mergeThemes(theme, themes) {
  themes.forEach((dir) => merge.default(`themes/${dir}/layouts`, `themes/${theme}/layouts`, 'overwrite'));
  themes.forEach((dir) => merge.default(`themes/${dir}/static`, `themes/${theme}/static`, 'overwrite'));
  console.log(`themes ${themes} merged into ${theme}`)
}
