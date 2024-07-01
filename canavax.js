let size =document.querySelectorAll(".size");
let canvas=document.querySelector(".canvas");
let color=document.querySelectorAll(".color");

color.forEach((item,index) => {

    item.addEventListener("click",() => {

        console.log(item.classList[1]);


    });

});

let isSize1=false;
let isSize2=false;
let isSize3=false;
let isSize4=false;



size.forEach((item,index)=>{

    item.addEventListener("click",()=>{
      
       if(item.classList[1]=="size1"){
        isSize1=true;
        isSize2=false;
        isSize3=false;
        isSize4=false;

       }

       else if(item.classList[1]=="size2"){
         isSize1=false;
        isSize2=true;
        isSize3=false;
        isSize4=false;
       }

       else if(item.classList[1]=="size3"){
         isSize1=false;
         isSize2=false;
         isSize3=true;
         isSize4=false;}
       
       else if(item.classList[1]=="size4"){
        isSize1=false;
        isSize2=false;
        isSize3=false;
        isSize4=true;
    }

    });
});

canvas.addEventListener("mousemove", (e) => {

    let drawing = document.createElement("div");
    let x =e.clientX;
    let y=e.clientY;
    //const {clientX,clientY} =e;
    drawing.classList.add("draw");
    drawing.style.left=`${x-100}px`;
    drawing.style.top=`${y-200}px`;

    if(isSize1){

        drawing.style.width="20px";
        drawing.style.height="20px";
    }

    else if(isSize2){

        drawing.style.width="40px";
        drawing.style.height="40px";
    }
    else if(isSize3){

        drawing.style.width="60px";
        drawing.style.height="60px";
    }
    else if(isSize4){

        drawing.style.width="80px";
        drawing.style.height="80px";
    }

    canvas.appendChild(drawing);
   /* setTimeout(()=>{

        canvas.removeChild(drawing);

    },3000);*/

});