+++
Title = "Shortcode - Link"
+++
**Makes a button styled or plain link with icons and different display modes**

```{{</* link filename="" maxwidth="" wpad="" title="" caption="" link="" style="" */>}}```

where:  \* = optional

* _**url**_: url/address of the link
* \*_**text**_: the text of the link
* \*_**icon**_: any font awesome font by name without the fa-.  see http://fontawesome.io/cheatsheet/.  If you only want the font then just don't use the *text* parameter.
* \*_**maxwidth**_: maximum width when max-width is great than viewport width.  default is 450
* \*_**type**_: use "btn" for a button link otherwise leave out for simple text.
* \*_**size**_: only used with type="btn", currently only "small" and "large" supported but you can use your own custom css with `.btn--<size>`
* \*_**display**_: values are "tab", "window", "modal".  Modal can only be used for a relative url within your site.
* \*_**height**_: only applies to type="window"
* \*_**width**_: only applies to type="window"


example in markdown:  

```{{</* link url="http://google.com" type="btn" icon="eye" text=" See Stater Popup window" display="window" height="500" width="500" */>}}```

rendered:  

{{< link url="http://dkebler.github.io/landingpage-starter" icon="eye" type="btn" size="small" text=" starter in a popup window" display="window" height="500" width="500" >}}

example in markdown:  

```
Click and you will be taken to {{</* link url="http://google.com" text="Google" display="tab" */>}} in a new tab
```
rendered:  

Click and you will be taken to {{< link url="http://google.com" text="Google" display="tab" >}} in a new tab
***
**Shortcode for the Hugo Experienced**
```
{{ .Scratch.Set "url" (.Get "url") }}
{{ .Scratch.Set "height" (.Get "height") }}
{{ .Scratch.Set "width" (.Get "width" | default "1000") }}
{{ if .Get "height" }}
   {{ .Scratch.Set "height" ( printf ", height=%s" ( .Scratch.Get "height" ) ) }}
  {{else}}
    {{ .Scratch.Set "height" "" }}
  {{ end }}

{{ if eq (.Get "display") "window" }}
{{ .Scratch.Set "url" ( printf "javascript:void( window.open('%s', 'blank', 'scrollbars=yes, toolbar=no, width=%s %s' ))" (.Scratch.Get "url") (.Scratch.Get "width") (.Scratch.Get "height") ) }}
{{ end }}
<a
{{ if eq (.Get "display") "tab" }} target="_blank"{{ end }}
{{ if eq (.Get "display") "modal" }} modal{{ end }}
{{ if eq (.Get "type") "btn" }} class="box box--btn btn btn--{{ .Get "size" | default "regular" }}"{{ end }}
{{ printf "href=%q" (.Scratch.Get "url") | safeHTMLAttr }}
>
{{ with .Get "icon" }}<i class="btn__icon fa fa-{{ . }}"></i>{{ end }}
{{ if eq (.Get "type") "btn" }}<div class="btn__text">{{ .Get "text" }}</div>
{{ else }}
{{ .Get "text" }}
{{ end }}
</a>
```
