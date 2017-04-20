+++
Title = "Shortcode - Bookmark"
# align = "center"
+++
**Turn any text into a bookmark (id html tag) that then can be linked to**

**usage:** ```{{</* bookmark "id" "text" "hide" */>}}```

**where:**  \* = optional

* _**id**_ - the name of the bookmark used in a link, becomes #*id* for use in a link 
* \*_**text**_ - is the text that will appear on the page, if missing *id* will be used as the text
* \*_**hide**_ - if "hide" appears the anchor will be made invisible on the page.

**example in markdown:**  

```This is all {{</* bookmark "about" "about us" */>}}```

```if I wanted to go to the new about us bookmark I'd click [here](#about)```

## For Experienced Hugo Coders

```html
{{ $numOfParams := ( len .Params ) }}
{{ if eq $numOfParams 1 }} <span name="{{ .Get 0 }}">{{ .Get 0 }}</span> {{ end }}
{{ if eq $numOfParams 2 }} <span name="{{ .Get 0 }}">{{ .Get 1 }}</span> {{ end }}
{{ if eq $numOfParams 3 }}
<span name="{{ .Get 0 }}" {{ if (.Get 2) "hide" }}class="invisible"{{ end }}>{{ .Get 1 }}</span>
{{ end }}
```
