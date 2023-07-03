const left=document.querySelector(".left");
const right=document.querySelector(".right");
const slider=document.querySelector(".slider");
const images=document.querySelectorAll(".image");
const bottom=document.querySelector(".bottom");
const length=images.length;
let slideNo=1;

for(let i=0;i<length;i++){
    const div=document.createElement("div");
    div.className="button";
    bottom.appendChild(div);
}
const buttons=document.querySelectorAll(".button");

buttons[0].style.backgroundColor="white";

function resetFormat(){
    buttons.forEach((button)=>{
        button.style.backgroundColor="transparent";
    })
}
buttons.forEach((button,i)=>{
    button.addEventListener("click",()=>{
        resetFormat();
        slider.style.transform=`translateX(-${i*500}px)`;
        button.style.backgroundColor="white";
    })
})
function changeColor(){
    buttons[slideNo-1].style.backgroundColor="white";
}
function nextSlide(){
    slider.style.transform=`translateX(-${slideNo*500}px)`;
    slideNo++;
}
function getFirstSlide(){
    slider.style.transform=`translateX(0px)`;
    slideNo=1;
}
function prevSlide(){
    slider.style.transform=`translateX(-${(slideNo-2)*500}px)`;
    slideNo--;
}
function getLastSlide(){
    slider.style.transform=`translateX(-${(length-1)*500}px)`;
    slideNo=length;
}
right.addEventListener("click",() => {
   (slideNo<length)?nextSlide():getFirstSlide();
   resetFormat();
  changeColor();
    })

left.addEventListener("click",()=>{
    (slideNo>1)?prevSlide():getLastSlide();
    resetFormat();
 changeColor();
})
