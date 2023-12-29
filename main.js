var speechrecognition = window.webkitSpeechRecognition;
var Recognition = new speechrecognition;
var X;
var Y;
var radius;
var width;
var height;
var draw_circle = "";
var draw_rect = "";
var R;
var B;
var G;
var INPUT;

function setup(){
 canvas = createCanvas(900,600);
}

function lear(){
    background("pink");
}

function start(){
    document.getElementById("Status").innerHTML = "Say Circle if you want a Circle and Rectangle for a Rectangle";
    INPUT = document.getElementById("Inputs").value;
    Recognition.start();
}

Recognition.onresult = function(event){
     console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("Status").innerHTML = "The speech you recognized is " + content;

    if(content == "Circle"){
            document.getElementById("Status").innerHTML = "Your Circle is done";
             draw_circle = "Circle";
      }

    if(content == "rectangle"){
            document.getElementById("Status").innerHTML = "Your Rectangle is done";
             draw_rect = "rectangle";
        }

}

function draw(){
    strokeWeight("5");
    stroke("black");
    
    if(draw_circle == "Circle"){
        for(var M = 1; M <= INPUT; M++ ){
        X = Math.floor(Math.random() * 900);
        Y = Math.floor(Math.random() * 600);
        radius = Math.floor(Math.random() * 100);
        
        circle(X,Y,radius);
        draw_circle = "";
}
}
    
    if(draw_rect == "rectangle"){
        for(var M = 1; M <= INPUT; M++){
            width = Math.floor(Math.random() * 100);
            height = Math.floor(Math.random() * 100);
            X = Math.floor(Math.random() * 900);
            Y = Math.floor(Math.random() * 600);
            rect(X,Y,width,height);
            draw_rect = "";
       }
}
    
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
}
}