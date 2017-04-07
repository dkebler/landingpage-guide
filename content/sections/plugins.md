+++
weight = 40
title = "Plugins (i.e Shortcodes)"
link_text = "Plugins"
# hidden = true
+++

### What are they

As explained in the [markdown section](#what-are-the-and-about) above shortcodes can be *plugged* into the middle of your markdown files to give them added functionality.  Each shortcode is invoked with either a {{</* *name* */>}} or {{%/* *name* */%}} and possibly a closing {{</* /*name* */>}} if they enclose some more content.   It all depends on the nature of the shortcode.

{{< bookmark "test" "This" >}} landing page theme currently has 12 shortcodes that you might *plugin* and will likely have more in the future (make your requests).  Below they are documented.  Most shortcodes have one or more parameters that follow the *name*.  The shortcodes are listed below with an explanation use case and are linked to a documentation page with details of how to use them.  But many times the easist way is just to see them in action in the markdown and copy, paste and edit to suit.

* {{< link url="http://test.com/test.html" text="avatar" display="modal" >}}  - creates a large circle icon from an image  
* {{< link url="#modal-bookmark" text="bookmark" display="modal" >}}  places a bookmark on the page that to be linked to
* box - wraps content in a flex box.  Useful for things like groups of buttons
* contact - takes contact information and makes a contact "card"
* disqus - places a disqus comments section in the page
* embed - embed content from other sites that use "iframes" like youtube and google maps
* format - wrap any content in custom classes.  Allows end user custom styling with  the custom css file(s)
* image - places and image on the page with optional title and caption and modal click to enlarge
* jotform - opens up a jotform by form id from jotform.com
* link  - creates custom links beyond simple markdown link including buttons
* lorem -  easily insert dummy lorem text when flessing out a site prototype
* social -  add bar of social icons and links  

There is a  way using a user shortcode to make a gallery of photos from a directory of photos but this has not been automated yet and is only shown here in example and will be documented when it's generally available.
{{< gallery-photos >}}
