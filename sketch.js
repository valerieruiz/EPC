function setup() {
  createCanvas(windowWidth, windowHeight*2);
}

function draw() {
  var color1 = color("#99CC00");
  var color2 = color("#FF00CC");
  
  var increment = 1/windowWidth;
  for (i = 0; i <= windowWidth; i++){
    var lineColor = lerpColor(color1, color2, increment*i); //makes color btw 1 and 2
    stroke(lineColor);
    line( 0, 0+i, windowWidth, 0+i);
  }
  
noLoop(); //prevents looping of draw function
  
}