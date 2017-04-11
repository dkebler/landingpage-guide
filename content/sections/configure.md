+++
weight = 22
title = "The Configuration File"
link_text = "Configure"
+++

The heart and soul of your landing page is the configuration file ```config.toml```.  So start the editing of the "your" site by bringing up the config.toml file in Atom.  You'll find it in the root of your starter directory.  

### The Layout

It's pretty simple.  Eeach line in the config file is a setting.  You can turn the setting "off"  by simply putting a hashtag(#) before it. If you remove the hashtag the value for that setting will be used.  There are a LOT of settings and they all have defaults so you only need to enable and change the ones you want.  There is currently no documentation for all the settings in ```config.toml``` but there is some helpful comments in the file itself (they have double hashtag in front).  Take a bit of time to read them all.  At the end of this section you can see a bit of the config.toml file copied here.

### What to Edit First

Before you get started editing ```config.toml``` notice that there is a copy of the file ```config.toml.bak```.  If you totally mess the file up you can revert to the backup copy by simply removing the .bak.  What you'll probably want to do first is personalize the colors, then maybe the fonts, add your own "Hero" image and change the text in the "Hero" (top) section.  **Watch the video below to get your feet wet editing** ```config.toml```.   For now don't worry about the content sections and navbar menu items that is covered below.  Note that if you do something small like forget a quote Hugo won't render your page, but Hugo will when you correct your mistake.  It's a good idea to use a versioning system like Git to save your versions of your work but that's an advanced topic.  So for now just make your own .bak copy of ```config.toml``` after you make major changes to it.

{{< link url="#modal-toml" text="View a copy of the settings file config.toml" icon="eye" type="btn" display="modal" >}}

{{< youtube gfOs432LW8Y >}}
