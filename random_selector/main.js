$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        var numberOfListItem = $("li#pic").length;
        var radomChildNumber = Math.floor(Math.random()*numberOfListItem)
        $("h1").text($("li#pic").eq(radomChildNumber).text());
        //找到img元件
        //設定img元件的src屬性 --> 對應元件的title值
        //$("img").attr("src",($("li").eq(radomChildNumber).attr("title")));
        $("img").attr("src",("food/"+radomChildNumber+".jpg"));
    });
});