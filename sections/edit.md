+++
weight = 25
title = "Edit"
# link_text = ""
+++

**YEA!** If you completed successfully the installation section you are finally ready to start editing **YOUR** own landing page.  You'll going find easy to edit an existing landing page than to start your own from scratch.  That's why you'll be using this guide's source files.

### What's Important

In the folder you just made containing this guide's source files you need to concentrate on just three places.  The first is the ```config.toml``` file in the root of the folder.  The second is the ```sections/``` subfolder and the .md files inside.  md is short for Markdown the textual editing format you'll be using.  The third is the ```assets/images/``` folder. That's the only places you'll need to put your attention to create your own personalized landing page.  The rest of the directory's folders can be safely ignored until you are ready for more advanced topics like tweaking the styling.

### Hugo Renders Your Landing Page

To begin you need to bring up Atom with your working folder open.  Then click on the + sign at the bottom for the terminal-panel and in that panel type ```hugo server```.  Hugo will be now render your site and serve it so you can see the changes every time you save.  Open your favorite browser and type ```localhost:1313``` into the address line and you be viewing the landing page that Hugo just rendered. But...Hugo is still working!  If you make changes and save Hugo will re-render your landing page automatically and you'll see those changes immediately in the browser.

### The Configuration File

So start the editing of the "your" site by bringing up the config.toml file in Atom.  What you'll probably want to do first is personalize the colors and fonts, add your own "Hero" image and change the text in the "Hero" (top) section.  It's pretty simple each line in the config file is a setting.  You can turn the setting "off"  by simply putting a hashtag before it. If you take it away the value for that setting will be used.  There are a LOT of settings and they all have defaults so you only need to enable and change the ones you want.  There is currently no documentation for all the settings in ```config.toml``` but here is some helpful comments in the file itself.  Watch this video to get your feet wet editing ```config.toml```.  If you make a copy of the file before you start then you can always go revert back to the original.  If you do something small like forget a quote Hugo won't render your page, bit Hugo will when you correct your mistake.

### The Sections - Writing in Markdown

Adding a section to the landing page is as easy as adding a md file in the ```sections``` directory and then

{{% embed type="youtube" title="Basics of Markdown" %}}
<iframe width="560" height="315" src="https://www.youtube.com/embed/HndN6P9ke6U" frameborder="0" allowfullscreen></iframe>
{{% /embed  %}}

[markdown](http://www.markdowntutorial.com/)
[cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
