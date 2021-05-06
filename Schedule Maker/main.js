$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>")

    
    var topicCount = topic.length;
    var milliSecondsPerDay = 24*60*60*1000;
    for(var x=0; x<topicCount ; x++){
        if(x%2==0){
        $("#courseTable").append("<tr>");
        //$("#courseTable").append("<td>"+(x+1)+"</td>");
        $("#courseTable").append(`<td>${(x+1)}</td>`);
        $("#courseTable").append(`<td>${new Date(startDate.getTime()+x*7*milliSecondsPerDay).toLocaleDateString().slice(5)}</td>`);
        $("#courseTable").append(`<td>${topic[x]}</td>`);
        $("#courseTable").append("</tr>");
        }
        if(x%2!==0){
        $("#courseTable").append("<tr>");
        //$("#courseTable").append("<td>"+(x+1)+"</td>");
        $("#courseTable").append(`<td style="background-color: tan;">${(x+1)}</td>`);
        $("#courseTable").append(`<td style="background-color: tan;">${new Date(startDate.getTime()+x*7*milliSecondsPerDay).toLocaleDateString().slice(5)}</td>`);
        $("#courseTable").append(`<td style="background-color: tan;">${topic[x]}</td>`);
        $("#courseTable").append("</tr>");
        }
    }
    $('#dateSelect').on('change',function(){
        $("#courseTable").empty();
        arr=$(this).val().split('-')
        console.log($(this).val())
        setMonthAndDay(arr[1],arr[2])
        $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>")
        for(var x=0; x<topicCount ; x++){
            if(x%2==0){
            $("#courseTable").append("<tr>");
            //$("#courseTable").append("<td>"+(x+1)+"</td>");
            $("#courseTable").append(`<td>${(x+1)}</td>`);
            $("#courseTable").append(`<td>${new Date(startDate.getTime()+x*7*milliSecondsPerDay).toLocaleDateString().slice(5)}</td>`);
            $("#courseTable").append(`<td>${topic[x]}</td>`);
            $("#courseTable").append("</tr>");
            }
            if(x%2!==0){
            $("#courseTable").append("<tr>");
            //$("#courseTable").append("<td>"+(x+1)+"</td>");
            $("#courseTable").append(`<td style="background-color: tan;">${(x+1)}</td>`);
            $("#courseTable").append(`<td style="background-color: tan;">${new Date(startDate.getTime()+x*7*milliSecondsPerDay).toLocaleDateString().slice(5)}</td>`);
            $("#courseTable").append(`<td style="background-color: tan;">${topic[x]}</td>`);
            $("#courseTable").append("</tr>");
            }
        }
    })
});