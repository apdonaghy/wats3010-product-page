          jQuery(function ($) {

               var doAnimations = function () {

                    var offset = $(window).scrollTop() + $(window).height(),
                         $animatables = $('.animatable');

                    if ($animatables.length == 0) {
                         $(window).off('scroll', doAnimations);
                    }

                    $animatables.each(function (i) {
                         var $animatable = $(this);
                         if (($animatable.offset().top + $animatable.height() - 100) <
                              offset) {
                              $animatable.removeClass('animatable').addClass('animated');
                         }
                    });

               };

               $(window).on('scroll', doAnimations);
               $(window).trigger('scroll');

          });
  
        
          function openNav() {
               document.getElementById("myNav").style.width = "100%";
             }
             
             function closeNav() {
               document.getElementById("myNav").style.width = "0%";
             }

             window.onscroll = () => {
               const nav = document.querySelector('#logo');
               if(this.scrollY <= 10) nav.className = ''; else nav.className = 'hidden';
             };