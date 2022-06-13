$(document).ready(function () {
    // mobile menu
     let mainNav = ".nav",
         sandwichBtn = ".sandwich-btn";
     $(sandwichBtn).bind("click", function () { 
        $(this).toggleClass("active");
         $(mainNav).toggleClass("active");
         $("body").toggleClass("active");
     });
     $(window).on("resize", function (event) {
         if ($(mainNav).css('display') == "none") {
             $(sandwichBtn).removeClass("active");
             $("body").removeClass("active");
         } else {}
     });

     //Equal height
     var matchHeight = function () {

        function init() {
            eventListeners();
            matchHeight();
        }

        function eventListeners() {
            $(window).on('load resize', function () {
                matchHeight();
            });
        }

        function matchHeight() {
            var groupName = $('.card__body');
            var groupHeights = [];

            groupName.css('min-height', 'auto');

            groupName.each(function () {
                groupHeights.push($(this).outerHeight());
            });

            var maxHeight = Math.max.apply(Math, groupHeights);
            groupName.css('min-height', maxHeight);
        };

        return {
            init: init
        };

    }();
    var matchHeight2 = function () {

        function init() {
            eventListeners();
            matchHeight();
        }

        function eventListeners() {
            $(window).on('load resize', function () {
                matchHeight();
            });
        }

        function matchHeight() {
            var groupName = $('.card__title');
            var groupHeights = [];

            groupName.css('min-height', 'auto');

            groupName.each(function () {
                groupHeights.push($(this).outerHeight());
            });

            var maxHeight = Math.max.apply(Math, groupHeights);
            groupName.css('min-height', maxHeight);
        };

        return {
            init: init
        };

    }();
    $(document).ready(function () {
        matchHeight.init();
        matchHeight2.init();
    });

    // scroll
    $("a").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top - 104;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    /*input*/
    $('input').on('blur', function () {
        if (!$(this).val())
            $(this).removeClass('hascontent');
        else
            $(this).addClass('hascontent');
    });
    $('input').bind('change', function () {
        $('input').each(function () {
            if ($(this).val()) {
                $(this).addClass("hascontent");
            }
        });
    })
    /*textarea*/
    $('textarea').on('blur', function () {
        if (!$(this).val())
            $(this).removeClass('hascontent');
        else
            $(this).addClass('hascontent');
    });
    $('textarea').bind('change', function () {
        $('textarea').each(function () {
            if ($(this).val()) {
                $(this).addClass("hascontent");
            }
        });
    })

})