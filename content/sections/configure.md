+++
weight = 22
title = "The Configuration File"
link_text = "Configure"
+++

The heart and soul of your landing page is the configuration file `config.toml`.  So start the editing of the *your* site by bringing up the `config.toml` file in Atom.  You'll find it in the root of your starter directory.  

### The Layout

It's pretty simple.  Each line in the config file is a setting.  You can turn a setting "off"  by simply putting a hashtag(#) before it. If you remove the hashtag the value for that setting will be used.  There are a LOT of settings and they all have defaults so you only need to enable and change the ones you want.  There is no separate documentation for all the settings in `config.toml` but each setting is commented in the file itself (they have double hashtag in front).  Take a bit of time to read them all.  Take a look now at a sample config.toml file

{{< link url="#modal-toml" text="View a sample config.toml file" icon="eye" type="btn" display="modal" >}}

### What to Edit First

Before you get started editing `config.toml` right click on it (in Atom) and choose *duplicate*.  Then enter `config.toml.bak`.  If you totally mess the file up you can revert to the backup copy by simply removing the .bak.  What you'll probably want to do first is personalize the colors, then maybe the fonts, add your own "Hero" image and change the text in the "Hero" (top) section.  **Watch the video below to get your feet wet editing** `config.toml`.   For now don't worry about the content sections and navbar menu items that is covered below.  Note that if you do something small like forget a quote Hugo won't render your page, but Hugo will when you correct your mistake.  It's a good idea to use a versioning system like Git to save your versions of your work but that's an advanced topic.  So for now just make your own .bak copy of `config.toml` after you make major changes to it.

{{< youtube id="gfOs432LW8Y" title="Editing the Settings File" >}}
