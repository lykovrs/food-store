/**
 * Created by rlykov on 15.08.2014.
 */

$(document).ready(function(){
    $('.login__trigger').click(function(){
        $(this).next('.login__content').fadeToggle();
        $(this).toggleClass('active');

//        if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
//        else $(this).find('span').html('&#x25BC;')
    });


    var substringMatcher = function(strs) {
        return function findMatches(q, cb) {
            var matches, substrRegex;

            // an array that will be populated with substring matches
            matches = [];

            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function(i, str) {
                if (substrRegex.test(str)) {
                    // the typeahead jQuery plugin expects suggestions to a
                    // JavaScript object, refer to typeahead docs for more info
                    matches.push({ value: str });
                }
            });

            cb(matches);
        };
    };

    var ingredients = [
        "Сахар",
        "Сайра",
        "Саке",
        "Салака",
        "Салат",
        "Сало",
        "Салями"
    ];

    $('.typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        },
        {
            name: 'ingredients',
            displayKey: 'value',
            source: substringMatcher(ingredients)
        });



    $('.catalog__i-elem_t_btn').bind('click', function(e){
        e.stopPropagation();
    });


    $(".catalog__item").click(function() {
        var options = {
            direction:"horizontal",
            complete: function(){
                $(".c-popup").show("drop", {direction: "up"});
                $(".catalog__blind").show();
            }
        };

        $(this).hide("clip", options);
    });

    $(".c-popup__btn-close").on("click", function(){
        var options = {
            direction: "up",
            complete: function(){
                $(".catalog__blind").hide();
                $(".catalog__item").show("clip");
            }
        };

        $(".c-popup").hide("drop", options);
    });
});


