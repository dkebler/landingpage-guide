+++
Title = "The Settings File"
# align = "center"
+++

Below is an example of the page settings file named ```config.toml```.  You can find it in the root of the project folder.  By editing the values in this file you can control the style, content or appearance of certain elements of the page.

In the file...
Double hashtag \#\# indicates a comment. Use a single proceeding hashtag \# to turn a setting "off" rather than deleting it. Therefore never delete any lines of this file

[ ] indicates a settings section never turn those off or delete them

Set ```baseurl``` before rendering for deloyment of your finished page otherwise leave it turned off

```toml
#baseURL = "https://mysite.com/mylandingpage"
languageCode = "en-us"
title = "Landing Page User Guide" ## required used for tab title and navbar
canonifyUrls = "true" ## don't change this
staticDir ="assets" ## don't change this
# publishDir = "dist"  ## default is public/
# contentDir = "sections" ## don't change this
layoutDir = "plugins" ## don't change this
theme = "landingpage-flex-hugo-theme" ## don't change this
# disqusShortname = "landingpage-guide"
# disableLiveReload = true

[params]
custom_css = ["custom.css"]  ## can add other files in array, make corresponding file in assets/css/
custom_js = ["custom.js","custom-docready.js"]  ## can add other files in array, make corresponding file in assets/css/
galleries = ["photos"] ## array of galleries names created
## You can redirect your images location to another external place like an s3 bucket. default is assets/images => /images
# imagespath = "https://mybuckettld/afolder/"  ## full url must end with /
lightbox = "lightgallery" ## must match the lightbox function name
## Possible font setting choices in this config file must be a google font name
## see  https://fonts.google.com/
## This applies to all font= settings in this file
font = "Open Sans"  ## default Roboto, sets for entire site, can be specifically overridden below
cache_timeout = 0

[params.navbar]
  # hidden = true
  # logo_text = "Will override site title"  ## default is to use the site Title above
  logo_text_short = "Landing Page" ## helps to fit on small screens without wrapping
  # logo_text_size="1" ## unit is em, 2em is default
  # font = ""
  ##  For List of html colors see either
  ## http://www.quackit.com/css/color/charts/css_color_names_chart.cfm
  ## https://www.colorcodehex.com/html-color-names.html
  color = "ivory"
  bg_color = "coral"

[params.hero]
  # custom_hero = true  ## All the hero settings below are ignored and hero is just a normal section if wanted
  # img = "hero.jpg"  # default is images/hero.jpg, must provide the full path or url
  font = "Acme"  # a valid google font name, default Roboto for all hero text
  color = "ivory"
  bg_color = ""
  text_outline = "black"
  # text_shadow = "black"
  # headlines_font = "Gloria Hallelujah"  # a valid google font name, defaults to intro font
  ## H1
  headline = "Landing Page Generator"
  headline_color = "firebrick"
  headline_size = "3.5"
  ## H2
  subheadline = "Users Guide"
  subheadline_color = "pink"
  subheadline_size = "3"
  ## H3
  subsubheadline = "Hugo Powered!"
  subsubheadline_color = "brown"
  subsubheadline_size = "2"
  ## H4
  lines = ["Customizable", "Add Your Sections", "Insert Your Content","Super Noob Friendly"]
  # lines_color = "ivory"
  lines_size = "1.5"
  divider = true
  # divider_color = "seagreen"
  # divider_thickness = "3"

[params.sections]
    #font = "Acme"
    bullet_icon = "\uF069"   # font awesome unicode value
    # headline_font = "Lato"
    # headline_size = "3"
    [params.sections.odd]
    bg_color = "bisque"
    color = "firebrick"
    [params.sections.even]
    color = "bisque"
    bg_color = "firebrick"
    [params.sections.footer]
    # color = "ivory"
    # bg_color = "darksalmon"
    [params.sections.comments]
    color = "black"
    bg_color = "ivory"

[params.modal]
    #font = "Acme"
    color = "ivory"
    bg_color = "coral"
    #text_size = "1.5"
    # headline_size = "2"

# these will overide the default which is even section button scheme comes from odd section scheme and vice versa
# default hover is simply
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
```
