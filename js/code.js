let num1 =1;
let num2 =2;
let num3 =3;
let num4 =4;
let num5 =5;
let num6 =6;
let num7 =7;
let num8 =8;
let num9 =9;
let num10 =10;
let num11 =11;
let num12 =12;

let btn = document.querySelector("#boton");
let input = document.querySelector("#inputEnter");
let showTable1 = document.querySelector("#result1");
let showTable2 = document.querySelector("#result2");
let showTable3 = document.querySelector("#result3");
let showTable4 = document.querySelector("#result4");
let showTable5 = document.querySelector("#result5");
let showTable6 = document.querySelector("#result6");
let showTable7 = document.querySelector("#result7");
let showTable8 = document.querySelector("#result8");
let showTable9 = document.querySelector("#result9");
let showTable10 = document.querySelector("#result10");
let showTable11 = document.querySelector("#result11");
let showTable12 = document.querySelector("#result12");
let alertPage = document.querySelector(".alert");
let alertMessage = document.querySelector("#mensaje");
let btnAlert = document.querySelector("#boton-alert");
btn.addEventListener("click", ()=>{
 

   if(!input.value.match(/^\d+/)){
       alertPage.style.animation = "show 400ms forwards";
       alertPage.style.display = "flex";
       alertMessage.textContent = "Not letter allowed and the file can't be empty";
   }else{
       //==============X1
    let table1 =parseInt( input.value * num1);
    showTable1.textContent =    input.value+" "+"x"+" "+num1+" "+"="+" "+table1 ;
    //==============X2
    let table2 =parseInt( input.value * num2);
    showTable2.textContent =    input.value+" "+"x"+" "+num2+" "+"="+" "+table2;
    //==============X3
    let table3 =parseInt( input.value * num3);
    showTable3.textContent =   input.value+" "+"x"+" "+num3+" "+"="+" "+table3;
    //==============X4
    let table4 =parseInt( input.value * num4);
    showTable4.textContent =   input.value+" "+"x"+" "+num4+" "+"="+" "+table4;
    //==============X5
    let table5 =parseInt( input.value * num5);
    showTable5.textContent =    input.value+" "+"x"+" "+num5+" "+"="+" "+table5;
    //==============X6
    let table6 =parseInt( input.value * num6);
    showTable6.textContent =    input.value+" "+"x"+" "+num6+" "+"="+" "+table6;
    //==============X7
    let table7 =parseInt( input.value * num7);
    showTable7.textContent =    input.value+" "+"x"+" "+num5+" "+"="+" "+table7;
    //==============X8
    let table8 =parseInt( input.value * num8);
    showTable8.textContent =    input.value+" "+"x"+" "+num8+" "+"="+" "+table8;
    //==============X9
    let table9 =parseInt( input.value * num9);
    showTable9.textContent =    input.value+" "+"x"+" "+num9+" "+"="+" "+table9;
    //==============X10
    let table10 =parseInt( input.value * num10);
    showTable10.textContent =    input.value+" "+"x"+" "+num10+" "+"="+" "+table10;
    //==============X11
    let table11 =parseInt( input.value * num11);
    showTable11.textContent =    input.value+" "+"x"+" "+num11+" "+"="+" "+table11;
    //==============X12
    let table12 =parseInt( input.value * num12);
    showTable12.textContent =    input.value+" "+"x"+" "+num12+" "+"="+" "+table12;

    input.value="";
   }
});

btnAlert.onclick = function(){
    
    alertPage.style.display = "none";
    input.value = "";
}



//==================Parallax Efect================
document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll(".layer").forEach(layer =>{
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX*speed)/100;
        const y = (window.innerHeight - e.pageY*speed)/100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

