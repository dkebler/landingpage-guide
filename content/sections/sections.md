+++
weight = 25
title = "Sections"
# link_text = ""
+++

### About

Adding a section to the landing page is as easy as adding a _**.md**_ (markdown) file in the ```content/sections/``` directory.  Each _**.md**_ file you create in that directory will need some settings at the top of the page called *frontmatter*.  The settings work the same as in ```config.toml```, use a hashtag in front to turn one off.  The *frontmatter* must be proceeded and followed by ```+++```

Here is an example *frontmatter* you can copy into your new _**.md**_ file.  It's easier though to just duplicate (right click in Atom) an existing section's _**.md**_ file and then edit it instead.

```toml
+++
weight = 10 # weight determines the order of sections.  Lower weights are first
Title = "It's all About Me"  ## the title of the section, used as the navbar link by default
link_text = "About"  ## will override the Title setting for use as the navbar link text
# navbar = false  ## create a section that doesn't have a corresponding navbar menu item...like a footer
# hidden = true  ## hide the section without deleting this file
# align = "left" ## aligns all elements in the section, center is the default
+++
```

### Hero - a special section

The very first section of a landing page is traditionally called a "Hero" and has a covering photo and large headline text.  This template allows you to easily do that in the `config.toml` file.  Alternatively if you want more control you can turn off the built in Hero section by enabling (removing the hashtage) of the  ```custom_hero = true``` setting.  Then you can simply create your own `hero.md` section file for the Hero or if you want none at all.  Crop and resize your image to about **2000 wide x 800 high** and save as a jpg at 90% jpg quality and it will work well as a hero image.

{{< youtube id="apsPpim4XE4" caption="Editing the Hero Section" >}}

### Create and Edit

The easy way to create a new section is simply to right click in Atom on a .md file and choose "duplicate" to copy an existing section md file as a new one.  Change the frontmatter settings as you wish and then edit/delete the markdown content that follows the *frontmatter*.

{{< youtube id="DnGJsCBB-eE" caption="Creating and Editing Regular Sections" >}}
