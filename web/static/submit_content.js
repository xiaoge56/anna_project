/**
 * Created by xiaoge on 2015/5/31.
 */

$(document).ready(function(){
$("#work1").click(function(){
    /*用jquery取出textare里面的内容*/
    var c = $('#anna_text').val();
    var arr = c.split('\n');
    $.post("#",
    {
        content:arr[0]


    });
    /*--------end---------*/
    /*-------load----*/
        $("#show").load("mainshow.html");
    })


 $("#confirm_main_info").click(function(){

    alert('confirm_main_info')

    })
});