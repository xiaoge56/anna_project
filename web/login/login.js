/**
 * Created by duchao on 2015/5/29.
 */


$(document).ready(function() {
/*
    $(":button").click(function () {
        alert("a")
        $("#div1").load();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
*/
    $("#btn2").click(function(){
        alert("x")
        $("#btn2").html("Dolly Duck");
    });
    $("#btn1").click(function(){
        alert("x")
        $("#btn2").html("Dolly Duck");
    });


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
        alert("a")
        $("#div0").load("demo_test.txt");



    })

})