import '../components/scss/style.scss';

import '../components/js/bootstrap.min';

import fancybox from '../components/js/jquery.fancybox.min';

import '../components/js/jquery.scrollbar.min';

jQuery(document).ready(function(){
    jQuery('.scrollbar-inner').scrollbar();
});

//SCROLL ON MAIN PAGE

$(function scrollBanner() {
	$.scrollThis = function () {
 		var lastScrollTop = $(window).scrollTop(),
	        delta = 5,
	        eleH = $('.bio-top__banner').outerHeight(),
	        isScrolling = false;
	    $(window).scroll(function () {
	        if(isScrolling)
	            return;
	        var nowScrollTop = $(this).scrollTop();
	        if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
	            if (nowScrollTop <= eleH && nowScrollTop >= lastScrollTop) {
	                isScrolling = true;
	                $('html,body').animate({
	                    scrollTop: $('body section:first-of-type').offset().top
	                }, 600, function() {
	                    isScrolling = false;
	                    lastScrollTop = $(window).scrollTop();
	                });
	            } else if (nowScrollTop <= eleH && nowScrollTop < lastScrollTop) {
	                isScrolling = true;
	                $('html,body').animate({
	                    scrollTop: 0
	                }, 600, function() {
	                    isScrolling = false;
	                    lastScrollTop = $(window).scrollTop();
	                });
	            }
	            lastScrollTop = nowScrollTop;
	        }
	    });
	}
	if(screen.width < 992 || screen.height > 620) {
	   $.scrollThis();
	}
	$('.bio-top__banner-down').click("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 600);
    });
});

// -------------INPUT-FILE----------------
function ready ()
{
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call( inputs, function( input )
    {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener( 'change', function(e)
        {
            console.log(this.files);
            var fileName = '';
            if(this.files && this.files.length > 1)
                fileName = ( this.getAttribute( 'data-multiple-caption' || '').replace('{count}', this.files.length));
            else
                fileName = this.files[0].name;
            if(fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
    });
};

$('.form-control').click(function() {
	$('.form-control').removeClass('active');
	$(this).addClass('active');
});

document.addEventListener('DOMContentLoaded', ready);



//HAMBURGER MENU
$(function openMenu() {
	$('#hamburger').click(function() {
		$(this).toggleClass('opened');
		$('#mobMenu').toggleClass('opened');
	});

	$(document).mouseup(function(e) {
		var block = $("#mobMenu, #hamburger");
		if(!block.is(e.target) && block.has(e.target).length === 0) {
			block.removeClass('opened');
		}
	});
});

$(function adaptiveCatalog() {
    if(matchMedia) {
        var screen = window.matchMedia('(max-width: 991px)');
        screen.addListener(changes);
        changes(screen);
    }
    function changes(screen) {
    	var mob = $('#mobMenu')
    	var left = $('#headerLeftMenu');
    	var right = $('#headerRightMenu');
		if(screen.matches) {
    		left.appendTo(mob)
    		right.appendTo(mob)
    	}
    	else {
    		left.appendTo($('#headerLeft'));
    		right.appendTo($('#headerRight'));
    	}
    }
});

import 'slick-carousel';

var slickAlbums = $('.slick-albums')

slickAlbums.slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

//video

$('.article__video').click(function() {
	$('#video-preview').hide();
})
$('#stop-button').click(function() {
	$('#video-preview').show();
})