let userDay = document.getElementById("block2")
let userMonth = document.getElementById("block1")
let userYear = document.getElementById("block3")
let bornDate = document.getElementById("tell")

bornDate.addEventListener('click',function (res){
    let massage=document.getElementById('massage');
    let parseDay=parseInt(userDay.value);
    let parseMonth=parseInt((userMonth.value)-1);
    let parseYear=parseInt(userYear.value);
    let months=['January','February','March','April','May','June','July','August','September','October','December'];
    let weekDay=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let dateIs=new Date(parseYear,parseMonth,parseDay);
    let weekDayIs=weekDay[dateIs.getDay()];
    let monthIs=months[parseMonth];
    if (weekDayIs===undefined || monthIs===undefined){
        massage.textContent= " ";
        setTimeout(function() {
            massage.textContent = "Введіть правильну дату";
        },500);
    }else{
        massage.textContent=  weekDayIs + ","  + monthIs + " " +  parseDay + ", "+ parseYear;
    }
    
});