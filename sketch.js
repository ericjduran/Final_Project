//program objective. to create a small circle as a controller to make another object perform certain tasks. the small circle moves with "w", "a", "s" and "d"
//keys and if it moves to the left, the bigger circle changes colors randomly, when right, increases size, when down, bounces back and
//forth of the walls and when up, creates many circles across the screen
var a=5
circle1={ //creating two circles
 x:300,
 y:200
};
circle2={
   x:40,
   y:130,
   l:80,
   w:80,
};
function setup() {
  createCanvas(600,400);  //creating a canvas of 600,400
}

function draw() {
  background(21,42,123);//creating a background the color dark blue

 fill(98,32,10); //filling the rectangle with a bergundy looking color
  strokeWeight(4);//making the edges of the rectangle a little wider
  rect(250,150,100,100);//creating rectangle location on the canvas


 fill(182,102,201); //filling up first circle with the color yellow
  ellipse(circle1.x,circle1.y,50,50) //creating first circle its color yellow

if (key ==='d') {
       circle1.x=circle1.x+1;//moves the circle towards right when pressing the 'D' key on the key board
   }
if (key ==='a') {
       circle1.x=circle1.x-1;//moves the circle left when pressing the "A" key on the keyboard
}
if (key ==='w') {
       circle1.y=circle1.y-1;//moves the circle up when pressing the "W" key on the keyboard
   }  
if (key ==='s') {
       circle1.y=circle1.y+1;//moves the circle down when pressing the "S" key on the keyboard
   }
fill(172,129,21);//fills the circle color pink
  if (circle1.x<275) {
  fill(random(255),random(255),random(255));//randomizes the circle's color when you move the smaller circler to the left of the bergundy box in the middle
}

ellipse(circle2.x,circle2.y,circle2.w,circle2.l);//creates second circle

if (circle1.y < 175) {
     for (var i = 0; i < width; i +=50) { //creates mini circles across the screen as long as the circles do not reach the end of the screen
       fill(23,53,65);
    ellipse(i, 200, 25,25)

for (var j = 0; j < width; j +=50) {//creates mini circles across the screen as long as the circles do not reach the end of the screen
    ellipse(300, j, 25,25);

}
}
}
if (circle1.y>220) {
 circle2.x=circle2.x+a;//moves the bigger circle towards right 
}
if (circle2.x>600 || circle2.x<0) {
 a = -a//moves the circle towards opposite direction when it reaches the end of the canvases
}
if (circle1.x>325) {
  circle2.w=circle2.w+1;//increases the width and height of the circle when small circle gets to 325 of the canvas
  circle2.l=circle2.l+1;
  
}
else circle2.l=80, circle2.w=80;//circle resets to the original value
}


   
    //fill(43,61,233);
    // ellipse(20,100,70,70);
    // ellipse(50,100,70,70);
    //   ellipse(80,100,70,70);
     //  ellipse(100,100,70,70);

 // for (var i = 0; i < width; i = i + 50) {
  // fill(54,65,234);
  // ellipse(i, 100, 25,25);