
var w = 1200;
var h = 800;
var slider;

 
function setup() {
  createCanvas(w, h);
  colorMode(HSB, 255);
  slider = createSlider(0, 255, 127);

}
 
function draw() {

  background(100);

  line(0, 0, mouseX, mouseY);

  rect(mouseX, mouseY, random(200), random(200))
  
  for(var i = 0; i < w; i+=50){
    for(var j = 0; j< h; j+=50){
           line(w/2, h/2, i, j);
           fill(50, 150, 200);
           ellipse(i, j, 20, 20);
      }
  }

  strokeWeight(2);
  stroke(slider.value(), 255, 255);
  fill(slider.value(), 255, 255, 127);
  ellipse(360, 200, 200, 200);
}
