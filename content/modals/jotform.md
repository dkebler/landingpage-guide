+++
Title = "Shortcode - JotForm"
+++
**Makes a button link to a Jotform form**

*Get Some Interaction from your "static" site by using Jotform*

See the {{< link text="Jotform" url="https://www.jotform.com/" display="tab" >}} website to make a form.  

usage: ```{{</* jotform "id" "text"*/>}}```

where:

* _**id**_ - *id* of Jotform created at Jotform website
* _**text**_ - text of button

currently creates a button that opens in a popup window

but eventually it will be embedable in the content

```{{</* jotform "bogus#" "My Awesome Form - Fill It" */>}}```

{{< jotform "bogus#" "My Awesome Form - Fill It" >}}

### shortcode for the Hugo experienced

```html
<div class ="box box--btn">
<a class="btn" href="javascript:void( window.open('https://form.jotform.com/{{ .Get 0 }}', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500') )">{{ .Get 1 }}</a>
</div>
```
