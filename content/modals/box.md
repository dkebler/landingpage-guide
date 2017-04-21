+++
Title = "Shortcode - Box"
+++
**Wrap some content in a flexbox that can be styled**

usage:
```
{{%/* box "list of css classes" */%}}
Stuff to Wrap
{{%/* /box */%}}
```

where:  \* = optional

* \*_**classes**_ - A space delimited set of css classes for custom styling

by default child element will be in a row with wrapping.  Use optional class `column` if you want to have all the elements be in a column regardless of viewport.  For custom styling add a class name in shortcode and a corresponding class in the custom.css file.  Be sure custom.css is enabled in the config.toml settings.

examples in markdown:  

## Example Markdown

```html
{{%/* box  demo */%}}
A paragraph I wrote blah...blah blah blah blah  blah blah blah blah

Another paragraph
{{%/* /box */%}}
```

rendered
{{% box demo %}}
A paragraph I wrote blah blah blah blah  blah blah blah blah

Another paragraph
{{% /box %}}

### Example Column
```html
{{%/* box  demo column */%}}
A paragraph I wrote blah...blah blah blah blah  blah blah blah blah

Another paragraph
{{%/* /box */%}}
```

rendered
{{% box demo column  %}}
A paragraph I wrote blah blah blah blah  blah blah blah blah

Another paragraph
{{% /box %}}

with this css in /assests/css/custom.css

```css
.box--demo {
  justify-content: space-around;
  width:100%;
}

.box--demo > p  {
  color:red;
  background-color: blue;
  padding: 1em;
}
```
***
### make a button bar by using `btn--bar`

```html
{{%/* box btn--bar */%}}
{{</* link type="btn" icon="download" url="" text="One" */>}}
{{</* link type="btn" icon="download" url="" text="Two" */>}}
{{</* link type="btn" icon="download" url="" text="Three" */>}}
{{%/* /box */%}}
```
{{< box btn--bar >}}
{{< link type="btn" icon="download" url="" text="One" >}}
{{< link type="btn" icon="download" url="" text="Two" >}}
{{< link type="btn" icon="download" url="" text="Three" >}}
{{< /box >}}



***
### The shortcode for experienced hugo coders

```html
{{ $numOfParams := ( len .Params ) }}
<div class="box {{ range .Params }}box--{{ . }} {{ end }}">
{{ .Inner }}
</div>
```
