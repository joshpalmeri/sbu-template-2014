// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/* From http://codepen.io/micahgodbolt/pen/FgqLc */
/* Thanks to CSS Tricks for pointing out this bit of jQuery
http://css-tricks.com/equal-height-blocks-in-rows/
It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. */

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

/* From http://www.jquery4u.com/snippets/url-parameters-jquery/ */
/* Usage:
   $('#city').val(decodeURIComponent($.urlParam('city')));
*/

$.urlParam = function(name){
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
};

function RegexTest(value, type) {
  var pattern;
  if(type=="url") {
    pattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if(value.match(pattern)) {
      return true;
    } else {
      return false;
    }
  }
};

/* drop-accordion */
var accordionContent;
$('.drop-accordion .tab').on('click',function() {
  $accordionContent = $(this).closest('.item').find('.content');
  $openTab = $(this).closest('.drop-accordion').find('.open').closest('.item').find('.tab');

  if($accordionContent.hasClass('hide-accessible')) {
    $(this).addClass('active');
    $accordionContent.slideUp(0,function(){
      $accordionContent.removeClass('hide-accessible').addClass('open')
        .slideDown('fast');
      $openTab.click();
    });

  } else {
    $(this).removeClass('active');
    $accordionContent.slideUp('fast',function(){
      $accordionContent.addClass('hide-accessible').removeClass('open')
        .slideDown(0);
    });

  }

});

/* Add commas to thousands */
/* from http://anthonybush.com/projects/jquery_fast_live_filter/demo/ */

function addCommas(num) {
  num = String(num);
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(num)) {
    num = num.replace(rgx, '$1' + ',' + '$2');
  }
  return num;
}