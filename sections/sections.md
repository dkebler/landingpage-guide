+++
weight = 25
title = "Sections"
# link_text = ""
+++

### About

Adding a section to the landing page is as easy as adding a md file in the ```sections/``` directory.  Each md file you create in that directory will need some settings at the top of the page called *frontmatter*.  The settings work the same as in ```config.toml```, use a hashtag in front to turn one off.

``` md
+++
weight = 1010 # weight determines the order of
# Title = "Comments"
navbar = false
hidden = true
+++
```

The easy way to create a new section is simply to copy an existing one existing one from the guide you are using as a starter.  Then change the frontmatter settings as you wish and then either edit or delete and start fresh with the markdown content that follows the frontmatter.

{{% embed type="youtube" title="Basics of Markdown" %}}
<iframe width="560" height="315" src="https://www.youtube.com/embed/HndN6P9ke6U" frameborder="0" allowfullscreen></iframe>
{{% /embed  %}}

[markdown](http://www.markdowntutorial.com/)
[cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
