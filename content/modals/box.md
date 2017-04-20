+++
Title = "Shortcode - Box"
+++
**Takes an image and...**

usage: ```{{</* box "list of css classes" */>}}```

where:  \* = optional

* \*_**classes**_ - A space delimited set of css classes for custom styling

examples in markdown:  

## Example 1 - Including Markdown

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
