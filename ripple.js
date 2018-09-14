$(function() {

    var $clickable = $('.ripple');

    /* mousedownだと直ぐに発動し、clickだとマウスボタンを離した時に発動する */
    $clickable.on('mousedown', function(e) {
        var _self   = this;
        var x       = e.offsetX;
        var y       = e.offsetY;

        var $effect = $(_self).find('.ripple__effect');
        var w       = $effect.width();
        var h       = $effect.height();
        console.log(e.offsetX);
        console.log('x:'+x, 'y:'+y);
        console.log('w:'+w, 'h:'+h);
        console.log('left:'+(x - w / 2));

        /* クリックした座標を中心とする */
        $effect.css({
            left: x - w / 2,
            top: y - h / 2
        });

        /* jsではclassの付け替えをするだけ */
        if (!$effect.hasClass('is-show')) {
            $effect.addClass('is-show');
            setTimeout(function() {
                $effect.removeClass('is-show');
            }, 600);
        }

        return false;
    });

});