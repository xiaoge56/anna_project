/**
 * Created by xiaoge on 2015/5/31.
 */
$(document).ready(function(){
  $(":reset").click(function(){
      alert("aa")
      $('p').load(
          "/"
      )
    $.get("/",function(data,status){
      alert("数据：" + data + "\n状态：" + status);
    });
  });
});