$(function(){


let txt1 = "おはようございます！";
let txt2 = "おげんきですか？";
let num1 = 20;
let num2 = 32;


    function sayhello(){
    $("#content").text("こんにちは！");
}

function saysomething(txt){
    $("#content").text(txt);
}


function samtwo(arg1,arg2){
    $("#sontent").text(arg1+arg2);
}



$("#button01").on("click",function(){
    sayhello();
})


$("#button02").on("click",function(){
    saysomething(txt1);
})


$("#button03").on("click",function(){
    samtwo(txt1,txt2);
})


$("#button04").on("click",function(){
    samtwo(numi,num2);
})


$("#button05").on("click",function(){
    samtwo(txt1,txt2);
    samtwo(num1,num2);
})



})