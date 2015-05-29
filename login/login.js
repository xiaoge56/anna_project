/**
 * Created by duchao on 2015/5/29.
 */


$(document).ready(function() {
/*
    $(":button").click(function () {
        alert("a")
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
*/

    $(":reset").click(function () {

        //alert("Mouse down over p1!");

        $("p").toggle();
        $("p").on({
            mouseenter: function () {
                $(this).css("background-color", "lightgray");
            },
            mouseleave: function () {
                $(this).css("background-color", "lightblue");
            },
            click: function () {
                $(this).css("background-color", "yellow");
            }
        });
    })

    $(":button").click(function () {
        alert("aaa")
        alert("name:"+$(input[id='username']).val());


    })

})