+++
weight = 22
title = "The Configuration File"
link_text = "Configure"
+++

The heart and soul of your landing page is the configuration file ```config.toml```.  So start the editing of the "your" site by bringing up the config.toml file in Atom.  You'll find it in the root of your starter directory.  

### The Layout

It's pretty simple.  Eeach line in the config file is a setting.  You can turn the setting "off"  by simply putting a hashtag(#) before it. If you remove the hashtag the value for that setting will be used.  There are a LOT of settings and they all have defaults so you only need to enable and change the ones you want.  There is currently no documentation for all the settings in ```config.toml``` but there is some helpful comments in the file itself (they have double hashtag in front).  Take a bit of time to read them all.  At the end of this section you can see a bit of the config.toml file copied here.

### What to Edit First

Before you get started editing ```config.toml``` notice that there is a copy of the file ```config.toml.bak```.  It you totally mess the file up you can revert to the backup copy by simply removing the .bak.  What you'll probably want to do first is personalize the colors, then maybe the fonts, add your own "Hero" image and change the text in the "Hero" (top) section.  **Watch the video below to get your feet wet editing** ```config.toml```.   For now don't worry about the sections and navbar menu items that is covered in the next section.  Note that if you do something small like forget a quote Hugo won't render your page, but Hugo will when you correct your mistake.  It's a good idea to use a versioning system like Git to save your versions of your work but that's an advanced topic.  So for now just make your own .bak copy of ```config.toml``` from after you make major changes to it.

``` md
## Double Hashtag indicates a comment
## Use a Single Proceeding hashtag to turn a setting "off" rather than deleting it
## Therefore never delete any line of this file
## [ ] indicates a setting section never turn those off
##
## set a baseurl before rendering for deloyment otherwise leave it turned off
# baseurl = "https://dkebler.github.io/landingpage-guide/"
languageCode = "en-us"
title = "Landing Page User Guide" ## required used for tab title and navbar
canonifyUrls = "true" ## don't change this
staticDir ="assets" ## don't change this
publishDir = "docs"
contentDir = "sections" ## don't change this
layoutDir = "plugins" ## don't change this
theme = "landingpage-flex-hugo-theme" ## don't change this
# disqusShortname = "landingpage-guide"

[params]
custom_css = ["custom.css"]  ## can add other files in array, make corresponding file in assets/css/
custom_js = ["custom.js","custom-docready.js"]  ## can add other files in array, make corresponding file in assets/css/
galleries = ["photos"] ## array of galleries names created
## You can redirect your images location to another place like an s3 bucket. default is assets/images => /images
# imagespath = "https://mybuckettld/afolder/"  ## full url must end with /
lightbox = "lightgallery" ## must match the lightbox function name
## Possible font setting choices in this config file must be a google font name
## see  https://fonts.google.com/
## This applies to all font= settings in this file
font = "Open Sans"  ## default Roboto, sets for entire site, can be specifically overridden below

[params.navbar]
  #logo_text = "Will override site title"  ## default is to use the site Title above
  logo_text_short = "Landing Page Guide" ## helps to fit on small screens without wrapping
```
