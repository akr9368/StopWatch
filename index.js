var hr =0;
var min =0;
var sec=0;
var count =0;
var timer = false;


function start(){
    timer = true;
    stopwatch();


}
function stop(){
    timer = false;


}

function reset(){
    timer = false;
    hr =0;
    min =0;
    sec =0;
    document.getElementById("hr").innerHTML="00";
        document.getElementById("min").innerHTML="00";
        document.getElementById("sec").innerHTML="00";

}

function stopwatch(){
    if (timer==true){
        sec = sec+1;
        if(sec==60){
            min = min+1;
            sec=0;
        }
        if(min==60){
            hr =hr+1;
            min=0;
            sec=0;
        }
        var stringHr = hr;
        var stringMin =min;
        var stringSec = sec;
        if(hr<10){
            stringHr = "0"+stringHr;
        }
        if(min<10){
            stringMin = "0"+stringMin;
        }
        if(sec<10){
            stringSec = "0"+stringSec;
        }
        document.getElementById("hr").innerHTML=stringHr;
        document.getElementById("min").innerHTML=stringMin;
        document.getElementById("sec").innerHTML=stringSec;
        setTimeout("stopwatch()",1000);

    }

}