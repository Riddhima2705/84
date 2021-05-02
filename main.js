//variables
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car_1_width=120;
car_1_height=70;
car_1_image="https://postimg.cc/9rqYz9HM";
car_1_x=10;
car_1_y=10;
car_2_width=120;
car_2_height=70;
car_2_image="https://postimg.cc/tnnW1Kff";
car_2_x=10;
car_2_y=100;
background_img="https://postimg.cc/bv5d35nK";
//variables

//events
window.addEventListener("keydown", keys);
//events

//functions
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=ub;
    background_imgtag.src=background_img;
    car_1_imagetag=new Image();
    car_1_imagetag.onload=uc1;
    car_1_imagetag.src=car_1_image;
    car_2_imagetag=new Image();
    car_2_imagetag.onload=uc2;
    car_2_imagetag.src=car_2_image;  
}
function ub(){
    ctx.drawImage(background_imgtag, 0,0,canvas.width, canvas.height);
}
function uc1(){
    ctx.drawImage(car_1_imagetag, car_1_x, car_1_y, car_1_width, car_1_height);
}
function uc2(){
    ctx.drawImage(car_2_imagetag, car_2_x, car_2_y, car_2_width, car_2_height);
}
function keys(e){
keypressed=e.keyCode;
if (keypressed=="38"){
    car1_up();
}
if (keypressed=="37"){
    car1_left();
}
if (keypressed=="39"){
    car1_right();
}
if (keypressed=="40"){
    car1_down();
}
if (keypressed=="65"){
    car2_left();
}
if (keypressed=="68"){
    car2_right();
}
if (keypressed=="87"){
    car2_up();
}
if (keypressed=="83"){
    car2_down();
}
}
