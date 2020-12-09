//this is the controller sketch, it just takes input and sends it to the secondsketch.js
var sketch = function (a){
  let x=0;
  let y=50;
  
  var mic;
  var amp;
  
  a.setup = function() {
    
    canvas1 = a.createCanvas(windowWidth,windowHeight) ;
   registerServiceWorker('service-worker.js')
   button1=a.createButton('start')
    button1.position (300,10)
    button1.mouseClicked (empezar)
    
  mic = new p5.AudioIn();
  amp = new p5.Amplitude();
  amp.setInput(mic);
  a.background(0);
}
   empezar =function (){
    mic.start ()
  }

 a.draw = function () {
  
  var level = amp.getLevel();
  a.stroke(255,50);
  a.ellipse(x, y, level * a.width / 2, level * a.width / 2);
  a.fill(255,10);
  //a.console.log(vol);
   x += 2;

  if(x > a.width){
    x = 0;
    y += 50;
  }

  if(y > a.height){
    y = 0;
  }
}
}
var myp51= new p5(sketch);


function draw(){
  background(100)

  //try moving this and the sendMessage to the draw() loop!

  //only send if the mouse is pressed
 if(mouseClicked){
    //pack up the mouse data into JSON
   let levelData = {
      "level*a.width/2": level,
    }

    //send ot to the secondsketch.js
    sendMessage(levelData)

  }

}
