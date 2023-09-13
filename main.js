
var billbox1=document.getElementById("box1");
var billbox2=document.getElementById("box2");
var billbox3=document.getElementById("box3");
var billbox4=document.getElementById("box4");
var billbtn=document.getElementById("btn")
console.log(billbox1,billbox2,billbox3,billbox4,billbtn);
btn.addEventListener("click",function(e){
    e.preventDefault();
    var billbox11=billbox1.value;
    var billbox12=billbox2.value;

    console.log(billbox11,billbox12);

    var percentage=Number(billbox11)*Number(billbox12)/100;
    billbox3.value=percentage;
    var total=Number(billbox11)+Number(percentage);
    billbox4.value=total;
    

})

