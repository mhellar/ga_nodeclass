var x, y,z,tx,ty,t1,t2,t3, b, bg, head;
var socket = io.connect(window.location.origin);

socket.on('mysocket', function(data) {
    console.log(data);
    if(data[0] ==="/1/fader1" && data[0] !== null){
    x = map(data[1], 0, 1, -400, 400);    
    }
    if(data[0] ==="/1/fader2" && data[0] !== null){
        y = map(data[1], 0, 1, -400, 400);    
    }
    if(data[0] ==="/1/fader3" && data[0] !== null){
        z = map(data[1], 0, 1, -400, 400);    
    }
    if(data[0] ==="/1/xy" && data[0] !== null){
        tx = map(data[1], 0, 1, -400, 400); 
        ty = map(data[2], 0, 1, -400, 400);    
    }

    b = data[2];
    console.log(parseInt(x));
});
function preload() {
    head = loadModel('model/head.obj');
  }
  
function setup(){
    createCanvas(1024, 768, WEBGL);
  }
  
  function draw(){
    background(0);
    translate(x, y, z);
    specularMaterial(500);
    model(head);
  
    ambientLight(50);
    directionalLight(200, 0, 0, 0.25, 0.25, 0.25);
    pointLight(0, 0, 200, -tx, -ty, 0);
    pointLight(200, 200, 0, tx, ty, 0);
   
    push();
    translate(-250, 0, 0);
    rotateZ(frameCount * 0.02);
    rotateX(frameCount * 0.02);
    specularMaterial(250);
    translate(x, y, z);
    box(100, parseInt(x), parseInt(x));
    pop();
  
    translate(-250, 0, 0);

    // ambientMaterial(parseInt(x));
    sphere(120, 64);
  }