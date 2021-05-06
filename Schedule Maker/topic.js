var topic =[
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性"
];

var startDate = new Date();


setMonthAndDay(2,21); 
var arr = new Array;

function setMonthAndDay(startMonth,startDay){
    //把社長說的那個日期變成JavaScript需要的日期時間格式
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
$('#dateSelect').on('change',function(){
    arr=$(this).val().split('-')
    console.log($(this).val())
    setMonthAndDay(arr[1],arr[2])
})


