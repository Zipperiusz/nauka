const imgs = ["./img/Gothic21.png","./img/Gothic22.png","./img/Gothic23.png","./img/Gothic24.png","./img/Gothic25.png","./img/Gothic26.png","./img/Gothic27.png","./img/Gothic28.png","./img/Gothic29.png","./img/Gothic221.png","./img/Gothic222.png","./img/Gothic223.png","./img/Gothic224.png"];
let counter = 0;
const slider = document.getElementById('slider');
setTimeout("slide()",1000);
var t;
const button = document.getElementById('stop');
button.addEventListener('click',function(){
    clearTimeout(t);
    console.log("Przerywam pokaz!");
});
function slide()
{
    slider.setAttribute("src",imgs[counter]);
    counter++;
    if(counter>=imgs.length)counter=0;
    t = setTimeout("slide()",1500);
}
function change()
{
    slider.setAttribute("src",imgs[counter]);
    counter++;
    if(counter===13)counter=0;
}
const bloczki = document.getElementsByClassName('itemek');
for(let i=0; i<imgs.length;i++)
{
    let item = bloczki[i];
    bloczki[i].addEventListener('click', ()=>{        
        counter = imgs.indexOf(item.getAttribute("src"));
        change();        
    });
}
