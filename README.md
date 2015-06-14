# vertigal - vertical jQuery gallery

## Usage

Save `jquery.vertigal.js` into your JavaScript folder. Then copy-paste the following:

```
<div id="my-gallery" data-text-div="#gallery-desc" style="height: 500px;">
    <img src="img-1.png" data-description="Nice grassy green field"/>
    <img src="img-2.png" data-description="Weird wavy lines"/>
    <img src="img-3.png" data-description="Warmly colored circles"/>
    <img src="img-4.png" data-description="Outer space"/>
</div>
<div id="gallery-desc"></div>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="jquery.vertigal.js"></script>
<script>
  $('#my-gallery').vertigal({imgSize:'cover'});
</script>
```

Update the following bits:

 - `id="my-gallery"` Give your gallery div any ID you want; just make sure you update it in `$('#my-gallery')`.
 - `data-text-div="#gallery-desc"` This is a selector that points to the div where you want the descriptions to appear.
 - `style="..."` Any style you may want should be in your site's stylesheet.
 - `data-description="..."` The caption for each image.
