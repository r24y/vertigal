;(function () {
  $.fn.vertigal = function vertigal(opts) {
    var $this = $(this);
    var $slides = $this.children('img');
    var $thumbnails = $('<div>');
    var $bigSlide = $('<div>');
    var $text = $($this.attr('data-text-div'));

    opts = opts || {};
    opts.sidebarWidth = opts.sidebarWidth || '60px';
    opts.imgSize = opts.imgSize || 'contain';
    opts.noWidth = opts.noWidth || false;

    $this.css({
      display: 'block',
      position: 'relative',
      'min-width': '200px',
      'min-height': '100px'
    });

    $this.addClass('vertigal');

    $thumbnails.addClass('thumbnails').css({
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      'overflow-x': 'hidden',
      'overflow-y': 'scroll',
      'padding-right': '15px',
      'text-align': 'right'
    });

    $bigSlide.css({
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: opts.sidebarWidth,
      'background-size': opts.imgSize,
      'background-repeat': 'no-repeat',
      'background-position': 'center'
    });

    $slides.each(function () {
      var $img = $(this);
      var src = $img.attr('src');
      var text = $img.attr('data-description');
      src = 'url("'+src+'")';
      var $thumbnail = $('<img>', {
        src: $img.attr('src'),
        style: 'cursor: pointer; display: block; float: right; clear: right;'
      });

      if (!opts.noWidth) {
        $thumbnail.css('width', opts.sidebarWidth);
      }

      $thumbnail.addClass('thumbnail');

      $thumbnails.append($thumbnail);
      $thumbnail.click(function () {
        console.log(src);
        $bigSlide.css('background-image', src);
        $text.text(text);
        $thumbnails.children().each(function () {
          $(this).toggleClass('active', $(this).attr('src') === $thumbnail.attr('src'));
        });
      });

      $img.remove();
    });

    $this.append($bigSlide);
    $this.append($thumbnails);
    $thumbnails.children().first().click();
  };
})();
