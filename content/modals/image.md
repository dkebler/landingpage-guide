+++
Title = "Shortcode - Image"
+++
**Displays an image with many settings**

where:  \* = optional

* \*_**filename**_: image path of the image.  By default it will look for file in the /assets/images. *Note:* All images can be served from an alternative place by setting "imagespath" setting in config.toml
* \*_**title**_: on top of image
* \*_**caption**_: on bottom of image
* \*_**link**_: put in the url to link to, opens in new tab  (still working on a ligtbox link for viewing at full screen)
* \*_**maxwidth**_: maximum width when max-width is great than viewport width.  default is 450
* \*_**wpad**_: width padding when max-width < viewport - default is 5
* \*_**style**_: add extra css class for custom styling `.box--image-"style"`.  Note: `.box--image` is available to style all images

example in markdown:  

```{{</* image filename="hero.jpg" maxwidth="200"  title="A Title" caption="this is a caption" link="http://www.utahscanyoncountry.com/index.html" */>}}```

rendered:  

{{< image filename="hero.jpg" maxwidth="400" title="A Title" caption="this is a caption" link="http://www.utahscanyoncountry.com/index.html" >}}


example in markdown:

```{{</* image filename="personal/dickfeynman.jpg" maxwidth="200"  title="Dick Feynaman" caption="One Crazy Smart Dude" */>}}```

rendered:  

{{< image filename="personal/dickfeynman.jpg" maxwidth="200"  title="Dick Feynaman" caption="One Crazy Smart Dude" >}}
