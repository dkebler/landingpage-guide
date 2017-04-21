+++
Title = "Shortcode - Avatar"
# align = "center"
+++
**creates a large circle icon from an image**

**usage:** ```{{</* avatar "image" */>}}```
          ```{{</* avatar img="image" url="link" */>}}```

**parameters:**  \* = optional

* \*_**image**_ - image path of the image.  By default it will look for avatar.jpg in the /assets/images. *Note:* All images can be servered from an alternative place by setting "imagespath" setting in config.toml
* \*_**url**_ - a valid url to link the image to


**examples in markdown:**  

```{{</* avatar  */>}}```  loads avatar.jpg that must be in assets/images folder

{{< avatar >}}

```{{</* avatar "personal/dickf2.jgp" */>}}``` with `dickf2.jpg` in the `assets/images/personal/` subdirectory
{{< avatar "personal/dickf2.jpg" >}}

must use parameter names if a link is desired

```{{</* avatar img="dickf.jpg" url="https://en.wikipedia.org/wiki/Richard_Feynman" */>}}```   

with `dickf.jpg` in `assets/images` folder

{{< avatar img="dickf.jpg" url="https://en.wikipedia.org/wiki/Richard_Feynman" >}}

**rendered example:**

### the shortcode for experienced hugo coders
```html
{{ $path := "/images/" }} {{ with $.Site.Params.imagespath }} {{ $path := ( . ) }}{{ end }}
{{ if .IsNamedParams }}
<div class="box box--avatar">
  {{ with .Get "url" }}<a href="{{.}}">{{ end }}
	<img class="avatar" src="{{ $path }}{{ .Get "img" }}"/>
  {{ with .Get "url" }}</a>{{ end }}
</div>
{{ else }}
{{ $avatar := ( .Get 0 | default "avatar.jpg" ) }}
<div class="box box--avatar">
	<img class="avatar" src="{{ $path }}{{ $avatar }}"/>
</div>
{{ end }}
```

```css
/* this makes the avatar circle form the square image */
img.avatar {
  object-fit: cover;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  padding: 0.5em;
}
```
