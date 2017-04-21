+++
Title = "The Settings File"
# align = "center"
+++

Below is an example of the page settings file named `config.toml`.  You can find it in the root of the project folder.  By editing the values in this file you can control the style, content or appearance of certain elements of the page.

[ ] indicates a settings section never turn those off or delete them

```
## Double Hashtag indicates a comment
## Use a Single Proceeding hashtag to turn a setting "off" rather than deleting it
## Therefore never delete any line of this file
## [ ] indicates a setting section never turn those off
##

## set a baseurl before rendering for deloyment otherwise leave it turned off
#baseURL = "https://mysite.com/mylandingpage"
languageCode = "en-us"
title = "My Landing Page Starter" ## required used for tab title and navbar
canonifyUrls = "true" ## don't change this
staticDir ="assets" ## don't change this
# publishDir = "dist"  ## default is public/
# contentDir = "sections" ## don't change this
layoutDir = "plugins" ## don't change this
theme = "landingpage-flex-hugo-theme" ## don't change this
# disqusShortname = "landingpage-guide"
#disableLiveReload = true

[params]
## Possible font setting choices throughout this config file must be a google font name with at least the 4 standard styles
## see  https://fonts.google.com/
## This applies to all font= settings in this file
# font = "Open Sans"  ## default Roboto, sets for entire site, can be specifically overridden below
font = "Rubik"  ## alternative just uncomment
# custom_css = ["custom.css", "custom-responsive.css"]   ## can add other files in array, make corresponding file in assets/css/
# custom_js = ["custom.js","custom-docready.js"]  ## can add other files in array, make corresponding file in assets/css/
## array of gallery names created
## each one should have a corresponding images folder and gallery-<name>.html shortcode in plugins/shortcodes
## This manual system for photo galleries will be replaced in future releases
galleries = ["photos"]
## You can store your images in an external place like an s3 bucket. default is within at assets/images => /images
# imagespath = "https://mybuckettld/afolder/"  ## full url must end with
lightbox = "lightgallery" ## must match a lightbox function that has been loaded in javascript, only "lightgallery" available currently
# cache_timeout = 0  default is 3600 seconds = 1 hour

[params.navbar]
  # hidden = true  ## turn off for simple page with no navigation topbar
  # logo_text = "Will override site title"  ## default is to use the site Title above
  logo_text_short = "My Landing Page" ## alternate logo text that helps to fit on small screens without wrapping
  # logo_text_size="1" ## unit is em, 2em is default
  # font = ""  ## a valid google font name - overrrides the site font above
  ##  All color options can use an html color name or a hex color code.  See either
  ## http://www.quackit.com/css/color/charts/css_color_names_chart.cfm
  ## https://www.colorcodehex.com/html-color-names.html
  color = "ivory"
  bg_color = "darkgreen"

[params.hero]
  # custom_hero = true  ## All the hero settings below are ignored and the hero is turned off.  You can add then a hero section as hero.md or not.
  img = "green-landscape-hero.jpg"  # default is hero.jpg,  put assets/images or other location set by imagespath above
  font = "Open Sans"  # a valid google font name, default Roboto for all hero text
  color = "ivory"
  # bg_color = ""  ## only needed if you are not using a hero image
  text_outline = "black"
  # text_shadow = "black"
  headlines_font = "Righteous"  # a valid google font name, defaults to page font or hero font above
  ## H1 -
  headline = "Landing Page Starter"
  headline_color = "darkgreen"
  headline_size = "3.5"
  ## H2
  subheadline = "Generated From"
  subheadline_color = "springgreen"
  subheadline_size = "3"
  ## H3
  subsubheadline = "Hugo Flex Theme"
  subsubheadline_color = "seagreen"
  subsubheadline_size = "2"
  ## H4
  lines = ["Customizable", "Add Your Sections", "Insert Your Content","Super Noob Friendly","See the Guide!"]
  lines_color = "lightgreen"
  lines_size = "1.5"
  divider = true
  divider_color = "darkgreen"
  divider_thickness = "3"

## Parameters used for every section of the page
[params.sections]
    #font = "Acme"
    bullet_icon = "\uF069"   # font awesome unicode value default to font awesome asterisk
    # headline_font = "Lato"
    # headline_size = "3"
    [params.sections.even]
    color = "bisque"
    bg_color = "seagreen"
    [params.sections.odd]
    bg_color = "ivory"
    color = "seagreen"
    [params.sections.footer]
    color = "darkolivegreen"
    bg_color = "lightgreen"
    [params.sections.comments]
    color = "darkolivegreen"
    bg_color = "palegreen"

##  any markdown file in content/modals will be available as a modally displayed content
##  Use the link shortcode with the url #modal-<filename>
##  example  {{</* link url="#modal-test text="A test modal" display="modal" */>}}
##  where there is a file test.md   in the content/modals directory.
[params.modal]
  #font = "Acme"
  color = "ivory"
  bg_color = "seagreen"
  #text_size = "1.5"

# these will override the default which is even section button scheme comes from odd section scheme and vice versa
[params.buttons.even]
  # color = "blue"
  # bg_color = "red"
  # hover_color ="white"
  # hover_bg_color ="purple"
[params.buttons.odd]
  # color = "red"
  # bg_color = "blue"
  # hover_color ="purple"
  # hover_bg_color ="white"

# TODO enable via shortcode
[[params.social]]
  #title = "email"
  #icon = "envelope-o"
  #url = "mailto:4005@kebler.net"

[params.youtube]
  # maxwidth = "800"  ## default maximum width for all youtubes 450px.  You can override each individually in shortcode
  #  wpad = "50"  ## padding on both left and right when view width is < maxwidth  default is 5
  ## on mobile devices autoplay is disabled so having a fast loading thumb image requires two clicks
  ## to start video.  Disable thumbs only if you have just one or two videos on your page
  # disable_thumb = "yes" ## display video thumbs and not thumb image  -- SLOWer to load.
```
