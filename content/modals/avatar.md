+++
Title = "Shortcode - Avatar"
# align = "center"
+++
**creates a large circle icon from an image**

**usage:** ```{{</* avatar "image-path" "link" */>}}```

**parameters:**  \* = optional

* \*_**image-path**_ - image path of the image.  By default it will look for avatar.jpg in the /assets/images. *Note:* All images can be servered from an alternative place by setting "imagespath" setting in config.toml
* \*_**url**_ - a page the image will link to when clicked


**examples in markdown:**  

* ```{{</* avatar  */>}}```  loads avatar.jpg that must be in assets/images folder
* ```{{</* avatar "myface.jpg" "http://me.myname.com" */>}}```   myface.jpg in assets/images folder
* ```{{</* avatar "personal/myface.jpg" "http://me.myname.com" */>}}```   myface.jpg in assets/personal/images folder


**rendered example:**

{{< avatar >}}

## For Experienced Hugo Coders

```html
{{ $numOfParams := ( len .Params ) }}
{{ $avatar := "avatar.jpg" }}
{{ if eq $numOfParams 1 }}{{ $avatar := .Get 1 }}{{ end }}
<div class="box box--avatar">
  {{ if eq $numOfParams 2 }}<a href="{{.Get 1 }}">{{ end }}
  {{ $path := "/images/" }} {{ with $.Site.Params.imagespath }} {{ $path := ( . ) }}{{ end }}
	<img class="avatar" src="{{ $path }}{{ $avatar }}"/>
  {{ if eq $numOfParams 2 }}</a>{{ end }}
</div>
```

```css
/* box creates a flexbox wrapper, row default */
.box {
  display: flex;
  flex-flow: wrap;
  align-content: center;
  justify-content: center;
  padding-bottom: 0.5em;
}

img.avatar {
  object-fit: cover;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  padding: 0.5em;
}
```
