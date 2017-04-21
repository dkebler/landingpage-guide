+++
Title = "Shortcode - Embed"
+++
# DRAFT

**embed your iframes from other sites like google map**

*Note: use the youtube shortcode for embedding youtube videos*

usage:

```
{{</* embed "type" */>}}
copy and paste your iframe code here
{{</* /embed */>}}
```

or with named parameters

```{{</* embed type="" title="" caption="" maxwidth="" wpad="" */>}}``` ....

where:  \* = optional

* \*_**type**_ - a one word descriptor of your iframe used to custom class styling `.embed--<type>`
* \*_**title**_
* \*_**caption**_
* \*_**maxwidth**_
* \*_**wpad**_

example:  
```html
{{</* embed type="google-map" title="Iceland" caption="Hot Place in A Cold Land" maxwidth="300" */>}}
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1732165.9399742798!2d-21.255978827180424!3d64.9144351116168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d22b52a3eb6043%3A0x6f8a0434e5c1459a!2sIceland!5e0!3m2!1sen!2sus!4v1492742579633" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
{{</* /embed */>}}
```

{{< embed type="google-map" title="Iceland" caption="Hot Place in A Cold Land" maxwidth="300">}}
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1732165.9399742798!2d-21.255978827180424!3d64.9144351116168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d22b52a3eb6043%3A0x6f8a0434e5c1459a!2sIceland!5e0!3m2!1sen!2sus!4v1492742579633" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
{{< /embed >}}

### the shortcode for the Hugo experienced

```html
{{ if .IsNamedParams }}
<div class="box box--embed box--{{ .Get "type" }}">
    {{ with .Get "title" }}
    <div class="box__title">{{ . }}</div>
    {{ end }}
    <div
       {{ with .Get "type" }} class="embed--{{ . }}"{{end}}
       {{ with .Get "maxwidth"}} maxWidth="{{ . }}"{{ end }}
       {{ with .Get "wpad"}} wPad="{{ . }}"{{ end }}
       >
    {{ .Inner }}
    </div>
    {{ with .Get "caption"}}
    <div class="box__caption">{{ . }}</div>
    {{ end }}
</div>
{{ else }}
<div class="box box--embed {{ with .Get 0 }}embed--{{ . }}{{ end }}">
    {{ .Inner }}
</div>
{{ end }}
```
