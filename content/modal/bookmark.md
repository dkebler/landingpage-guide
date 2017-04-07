+++
Title = "Shortcode - Bookmark"
# navbar = false
# hidden = true
+++
**Turn any text into a bookmark (id html tag) that then can be linked to**

usage: ```{{</* bookmark "id" "text" "hide" */>}}```

where:  \* = optional

* *id* - the name of the bookmark used in a link, become #*id* for use in a link like
* \**text* - is the text that will appear on the page, if missing *id* will be used as the text
* \**hide* - if "hide" appears the anchor will be made invisible on the page.

example in markdown:  

```This is all {{</* bookmark "about" "about us" */>}}```

```if I wanted to go to the new about us bookmark I'd click [here](#about)```

example rendered:

This is all {{< bookmark "concerning" "about us" >}} and stuff

if I wanted to go to the about us bookmark I'd click [here](#concerning)

{{< lorem 2p >}}
