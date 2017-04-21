+++
Title = "Markdown of the 'Markdown' Section"
# align = "center"
+++

Below is the actual markdown used to generate this section you are reading on learning markdown...another circular reference ha ha.

It's a bit hard to read because the paragrahs don't soft wrap but they will in the Atom Editor.
```
+++
weight = 26
title = "Markdown"
# link_text = ""
+++
### Learn it

Teaching you the details about writing markdown is beyond the scope of this guide.  He are two links to get you started, a markdown [tutorial](http://www.markdowntutorial.com/), and a markdown [cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).  Also the starter site has a section on using markdown as well to help you get....well..started  

{{</* link type="btn" size="small" url="https://dkebler.github.io/landingpage-starter/#kitchen" text="Kitchen Sink of Markdown at Starter Site" icon="eye" display="tab" */>}}

If you prefer here is video to get you going.

{{</* youtube HndN6P9ke6U */>}}

Honestly though the best way to learn markdown is to examine some examples. Luckily this guide you are using and the starter site are chock full of markdown in the `content/sections/` directory.  It's probably just easier to edit an existing markdown file as it is to start from scratch at least when you are first learning.   Look now at `content/sections/markdown.md` file that is used to make this section you are reading!  

{{</* link type="btn" size="small" url="#modal-markdown" text="Markdown of the section you are reading" icon="eye" display="modal" */>}}

In this way you can relate the simplicity of the markdown with what is actually seen.  The power of markdown is that the style and formatting are not part of the document.  They are set separately.  This allows two things

1.  Consistency of styling across a document.  
2.  A simple one line change to a style can change that style for all or part of a page.

This theme was set up for you to easily make a limited number of those styling changes without knowing Hugo/CSS/HTML.  For example you can change the font for the entire site in by simply changing the `font=""` setting in the main `[.params]` section in `config.toml` to any valid Google font name. You need not do *anything* to the individual markdown files to make that happen nor know how to edit cascading style sheets!

### What are the `{{%/*  */%}}` and `{{</*  */>}}` about

In the markdown tutorial, video and cheatsheet there was never any mention of these symbols `{{%/*  */%}}` and `{{</*  */>}}`.  That's because they are **NOT** markdown.  They are special delimiters that Hugo uses to identify plugins called [shortcodes](#plugins).  Shortcodes are custom pieces of code that coders write for your benefit.  They allow you to extend markdown to do things it could never do, for example *plugin* a button link, or a video, or a photo gallery.  So when you see them know that they are not markdown.  Take a look at the [plugins/shortcode](#plugins) section below for an explanation of their use and what shortcodes are currently available in this landing page generator.
```
