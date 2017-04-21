+++
Title = "Shortcode - Disqus"
+++
**Embeds a Disqus Comments**

usage: ```{{</* disqus "shortname" */>}}```

where:  

 _**shortname**_ - the name of the disqus comments shortname from your disqus user account.

example in markdown:  

```{{</* disqus "mylandingpage" */>}}```

See the [disqus](https://disqus.com) website

## For Experienced Hugo Coders
```html
<div class="box box--disqus">
    <div id="disqus_thread" class="box__embed box__embed--disqus">
    </div>
</div>

<script type="text/javascript">

(function() {
    // Don't ever inject Disqus on localhost--it creates unwanted
    // discussions from 'localhost:1313' on your Disqus account...
    // if (window.location.hostname == "localhost")
    //     return;

    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    var disqus_shortname = '{{ .Get 0 | default .Site.DisqusShortname }}';
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();
</script>

<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

<a href="http://disqus.com/" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>
```
