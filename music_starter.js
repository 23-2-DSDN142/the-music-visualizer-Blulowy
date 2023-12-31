let firstRun = true;
let Mon;
let moon; 
let redmoon;
let BG;
let eyes;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    rectMode(CENTER);
    Mon = loadImage('Mon.png');
    moon = loadImage('M.png');
    redmoon = loadImage('BM.png')
    BG = loadImage('BG.png')
    eyes = loadImage('eyes.png')
    firstRun = false;
  }
  background('#17060f')
  textFont('Helvetica'); // please use CSS safe fonts
  //rectMode(CENTER)
  textSize(24);
  angleMode(DEGREES)

   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;

   //cicle parameter
   let cir_size = 25;
   let circle_base = 700
   let cir_start = 80
   let cir_space = 240

   // moon parametr 
   let mooncol1 = color('#8e9895');
   let mooncol2 = color('#b60604');
   let voice = map(other, 0, 100, 0, 1.2)
   let changemoon = map(other, 0, 100, 0, 260)
   let mooncol = lerpColor(mooncol1, mooncol2, voice);
   let cress1 = color('#4d575f')
   let cress2 = color('#630a13')
   let cress = lerpColor(cress1, cress2, voice);
   let moon_bace = 210;

   //eyes parametr
   let drums = map(drum, 0, 100, 0, 255);

   //cracks parametr
   let crsize = 10
   let crcol = color('#ffd831')
   let heigh1 = map(bass, 0, 100, canvasHeight, -100)
   let dial1 = map(bass, 0, 100, 190, 240);
   let dial2 = map(bass, 0, 100, canvasHeight/2, canvasHeight/2-30);
   let heigh2 = map(bass, 0, 100, canvasHeight-200, -100);
   let dial3 = map(bass, 0, 100, 190, 150);
   let dial4 = map(bass, 0, 100, canvasHeight/3*2, canvasHeight/3*2-40);

   // bg
   image(BG,0,0)

   // craks
   drawingContext.shadowBlur = 20;
   drawingContext.shadowColor = color(255, 216, 49);
   stroke(crcol)
   strokeWeight(crsize)
   line(190, canvasHeight, 190, heigh1);
   if(heigh1<=canvasHeight/2){
    line(190, canvasHeight/2, dial1, dial2);
    if(dial1>=210){
      line(dial1, dial2, dial1, heigh2);
      if(heigh2<=200){
        line(dial1, 200, dial1+30, dial2-200)
        if(dial1+30>=240){
          line(dial1+30, dial2-200, dial1+30, heigh2-20)
        }
      }
    }
   }
   if(heigh1<=canvasHeight/3*2){
    line(190, canvasHeight/3*2, dial3, dial4);
    if(dial3<=170){
      line(dial3, dial4, dial3, heigh2)
      if(heigh2<=canvasHeight/2-30){
        line(dial3, canvasHeight/2-30, dial3-20, dial4-150)
        if(dial3-20<=150){
          line(dial3-20, dial4-150, dial3-20, heigh2-20)
        }
      }
    }
   }

   line(190+980, canvasHeight, 190+980, heigh1);
   if(heigh1<=canvasHeight/2){
    line(190+980, canvasHeight/2, dial1+980, dial2);
    if(dial1+980>=210+980){
      line(dial1+980, dial2, dial1+980, heigh2);
      if(heigh2<=200){
        line(dial1+980, 200, dial1+30+980, dial2-200)
        if(dial1+30+980>=240+980){
          line(dial1+30+980, dial2-200, dial1+30+980, heigh2-20)
        }
      }
    }
   }
   if(heigh1<=canvasHeight/3*2){
    line(190+980, canvasHeight/3*2, dial3+980, dial4);
    if(dial3+980<=170+980){
      line(dial3+980, dial4, dial3+980, heigh2)
      if(heigh2<=canvasHeight/2-30){
        line(dial3+980, canvasHeight/2-30, dial3-20+980, dial4-150)
        if(dial3-20+980<=150+980){
          line(dial3-20+980, dial4-150, dial3-20+980, heigh2-20)
        }
      }
    }
   }
   drawingContext.shadowBlur = 0;

   //eyes
   tint(255, 255, 255, drums)
   image(eyes, 0, 0)
   tint(255,255,255)

   

  // moon 
  /*noStroke()
  fill(mooncol);
  circle(bar_pos_x, moon_bace, 380);
  push()
  translate(bar_pos_x, moon_bace)
  rotate(50)
  fill(cress)
  arc(0, 50, 335, 280, 0, 360)
  pop()
  /*fill(mooncol);
  circle(bar_pos_x+100, moon_bace+20, 50);*/
  noStroke()
  noFill()
  drawingContext.shadowBlur = 200;
  drawingContext.shadowColor = color(255,255,255);
  circle(bar_pos_x, moon_bace, 400);
  drawingContext.shadowBlur = 0;
  image(moon, 23, 0);
  tint(255,255,255,changemoon)
  image(redmoon, 23, 0)
  tint(255,255,255)
  drawingContext.shadowBlur = 0;

  // Mon
  image(Mon, 0, 0);

  //circles 
  noStroke()
  //fill('#ff0000')
  fill(255, 0, 0, 150)
  let m = map(vocal, 0, 100, cir_size, 90);
  let s = map(vocal, 0, 100, cir_size, 70);
  let xs = map(vocal, 0, 100, cir_size, 50);
  for(let i = 0; i <= 5; i++){
      if(i==0 || i==5){circle(cir_start+(cir_space*i), circle_base, m)}
      if(i==1 || i==4){circle(cir_start+(cir_space*i), circle_base, s)}
      if(i==2 || i==3){circle(cir_start+(cir_space*i), circle_base, xs)}
    }






















   /* vocal bar is red
   fill(200, 0, 0);
   rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   fill(0);
   text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   fill(0, 200, 0);
   rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   fill(0);
   text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   fill(50, 50, 240);
   rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   fill(0);
   text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   /* other bar is white
   fill(200, 200, 200);
   rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   fill(0);
   text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   fill(255, 255, 0); */
 
   /* display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3); */

  
}