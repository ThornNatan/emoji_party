
const emojis = ['💧', '💭', '💧'];
const numbers = [1, 2, 3, 4, 5]

function setup() {
  createCanvas(400, 400);
}

let cloud = '🌧️';

function draw() {
  const bgColor = random(['red', 'orange', 'yellow', 'greeen', 'blue', 'purple', 'pink', 'white'])
  background(bgColor);
  frameRate (8)
  textSize (140)
  text(cloud,300,80)
  text(cloud,220,80)
  text(cloud,150,80)
  text(cloud,50,80)
  text(cloud,-20,80)
  textSize(30);
  textStyle(BOLD);
  text("Don't let it overwhelm you!", 10, 200);
  fill ("black")
  stroke("white")
   for(number of numbers){
  const emoji = random(emojis)
  const x = random(width);
  const y = random(height);
  textSize (50)
  xValue =random (50, 200)
  yValye = random (50, 200)
  text(emoji, x, y)
  }
  
} 
function mouseClicked(){
    if (cloud === '🌧️') {
      cloud = '⛈️'; 
      
    } else {
      cloud = '🌧️'; 
    }
}