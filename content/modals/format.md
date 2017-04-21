+++
Title = "Shortcode - Format"
+++
**Wrap some content so it can be custom styled**

usage:
```
{{%/* format "list of css classes" */%}}
Stuff to Wrap
{{%/* /box */%}}
```

where:  \* = optional

* \*_**classes**_ - A space delimited set of css classes for custom styling

examples in markdown:  

## Example Markdown

```html
Here is some normally formatted text. {{%/* format  red */%}}Here I need a sentence to be in red{{%/* /format */%}}.  This sentence is normal again.  
```
Here is some normally formatted text. {{% format  red %}}Here I need a sentence to be in red{{% /format %}}. This sentence is normal again.  

with this css in `css/custom.css` and the setting in `config.toml` accordingly
```css
.red {
  color: red;
}
```

### the shortcode for Hugo experienced
```html
<span class="{{ range .Params }}{{ . }} {{ end }}">
{{ .Inner }}
</span>
```
