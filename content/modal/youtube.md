+++
Title = "Shortcode - Youtube"
+++
****
## Unamed Parameters

usage: ```{{</* youtube "id" "start" */>}}```

where:  \* = optional

* _**id**_ - the youtube id
* \*_**start**_ - for start time other than the beginning in seconds

example in markdown:  

```{{</* youtube 7G6TcT1liQw  60 */>}}```  start one minute into video with id of 7G6TcT1liQw

rendered:

{{< youtube 7G6TcT1liQw  60 >}}

## Named Parameters

usage:  ```{{</* youtube id="" start="" plist="" title="" caption="" nothumb="" maxwidth="" wpad="" */>}}```

where:  \* = optional

* _**id**_ - the youtube id
* \*_**start**_ - for start time other than the beginning in seconds
* \*_**plist**_ - youtube playlist id (for id must choose an id of from one of the videos therein )
* \*_**title**_ - Title on top of video
* \*_**caption**_ - caption below video
* \*_**maxwidth**_ - for larger devices it limits the width of the video, default is 450px.
* \*_**wpad**_ - when display width is < maxwidth adds this padding.  Default is 5px.  For mobile devices.
* \*_**nothumb="yes"**_ - include this if you want the actual video to appear (takes much longer to load)

example in markdown:  

```{{</* youtube id="7G6TcT1liQw" start="60" maxwidth="150" title="A Title" caption="this is a caption" */>}}```

rendered:  

{{< youtube id="7G6TcT1liQw" start="60" maxwidth="150" title="A Title" caption="this is a caption" >}}

## Actual Short Code - For Experienced Hugo Coders

```html
{{ if .IsNamedParams }}
{{ $.Scratch.Set "maxwidth" ( $.Page.Site.Params.youtube.maxwidth | .Get "maxwidth" )  }}
{{ $.Scratch.Set "wpad" ( $.Page.Site.Params.youtube.wpad | .Get "wpad" )  }}
{{ $.Scratch.Set "nothumb" ( $.Page.Site.Params.youtube.disable_thumb | .Get "nothumb" )  }}
<div class="box box--column">
    {{ with .Get "title" }}
    <div class="box__title">{{ . }}</div>
    {{ end }}
    <div class="box box--embed box--youtube"
       youtube_id="{{ .Get "id" }}"
       {{ with .Get "start"}} start="{{ . }}"{{ end }}
       {{ with .Get "plist"}} list="{{ . }}"{{ end }}
       {{ with $.Scratch.Get "maxwidth"}} maxWidth="{{ . }}"{{ end }}
       {{ with $.Scratch.Get "wpad"}} wPad="{{ . }}"{{ end }}
       {{ with $.Scratch.Get "nothumb"}} nothumb="yes" {{ end }}
       >
  <!-- thumb and video get put here -->
    </div>
    {{ with .Get "caption"}}
    <div class="box__caption">{{ . }}</div>
    {{ end }}
</div>
{{ else }}
{{ $numOfParams := ( len .Params ) }}
<div class="box box--embed box--youtube"
       youtube_id="{{ .Get 0 }}"
       {{ if eq $numOfParams 2 }} start="{{ .Get 1 }}"{{ end }}
       {{ with $.Page.Site.Params.youtube.disable_thumb }} nothumb="yes" {{ end }}
       >
      <!-- image or iframe injected here -->
</div>
{{ end }}
```
