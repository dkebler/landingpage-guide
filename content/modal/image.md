+++
Title = "Shortcode - Image"
+++
**Takes an image and...**

usage: ```{{</* bookmark "id" "text" "hide" */>}}```

where:  \* = optional

* _**id**_ - the name of the bookmark used in a link, become #*id* for use in a link like
* \*_**text**_ - is the text that will appear on the page, if missing *id* will be used as the text
* \*_**hide**_ - if "hide" appears the anchor will be made invisible on the page.

example in markdown:  

```This is all {{</* bookmark "about" "about us" */>}}```

```if I wanted to go to the new about us bookmark I'd click [here](#about)```

This is all {{< bookmark "concerning" "about us" >}} and stuff

if I wanted to go to the about us bookmark I'd click [here](#concerning)
