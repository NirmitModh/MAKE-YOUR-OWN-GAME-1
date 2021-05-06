var newt, grindelwald, demiguise, dragon, pickett;
var newt_img, grindelwald_img, demiguise_img, dragon_img, pickett_img;
var wall, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20;

function preload(){
  newt_img = loadImage("Images/newt1.png");
  grindelwald_img = loadImage("Images/grindelwald.png");
  demiguise_img = loadImage("Images/demiguise.png");
  dragon_img = loadImage("Images/thunderbird.png");
  pickett_img = loadImage("Images/pickett.png");
}

function setup() {
  createCanvas(displayWidth-10, displayHeight-145);

  newt = createSprite(500, 185, 200, 200);
  newt.addImage(newt_img);
  newt.scale = 0.1;

  grindelwald1 = createSprite(100, 60, 20, 20);
  grindelwald1.addImage(grindelwald_img);
  grindelwald1.scale = 0.1;

  grindelwald2 = createSprite(100, 680, 20, 20);
 // grindelwald2.addImage(grindelwald_img);
 // grindelwald2.scale = 0.1;

  grindelwald3 = createSprite(1450, 40, 20, 20);
  //grindelwald3.addImage(grindelwald_img);
 // grindelwald3.scale = 0.1;

  grindelwald4 = createSprite(1450, 680, 20, 20);
  //grindelwald4.addImage(grindelwald_img);
  //grindelwald4.scale = 0.1;

  wall = createSprite(780, 20, 1400, 10);
  wall1 = createSprite(1480, 170, 10, 300);
  wall2 = createSprite(1480, 560, 10, 300);
  wall3 = createSprite(80, 170, 10, 300);
  wall4 = createSprite(80, 560, 10, 300);
  wall5 = createSprite(780, 710, 1400, 10);
  wall6 = createSprite(300, 150, 10, 150);
  wall7 = createSprite(190, 220, 210, 10);
  wall8 = createSprite(370, 150, 10, 150);
  wall9 = createSprite(845, 220, 955, 10);
  wall10 = createSprite(915, 150, 950, 10);
  wall11 = createSprite(360, 310, 400, 10);
  wall12 = createSprite(800, 60, 10, 70);
  wall13 = createSprite(620, 90, 360, 10);
  wall14 = createSprite(1140, 90, 500, 10);
  wall14 = createSprite(2335, 120, 10, 70);
  wall15 = createSprite(1390, 120, 10, 70);
  wall16 = createSprite(1390, 425, 10, 400);
  wall17 = createSprite(360, 400, 400, 10);
  wall18 = createSprite(165, 500, 10, 200);
  wall19 = createSprite(410, 600, 500, 10);
  wall20 = createSprite(465, 655, 600, 10);
  wall21 = createSprite(760, 435, 10, 430);
  wall22 = createSprite(510, 500, 500, 10);
  wall23 = createSprite(260, 550, 10, 100);
  wall24 = createSprite(1110, 300, 560, 10);
  wall25 = createSprite(1100, 380, 430, 10);
  wall26 = createSprite(830, 500, 10, 270);
  wall27 = createSprite(880, 475, 10, 200);
  wall28 = createSprite(1080, 630, 500, 10);
  wall29 = createSprite(940, 500, 10, 100);
  wall30 = createSprite(1120, 450, 350, 10);
  wall31 = createSprite(1120, 550, 350, 10);
}

function draw() {
  background("lightblue");  

  moveNewt();
  moveGrindelwald1();
  moveGrindelwald2();
  // moveGrindelwald3();
  // moveGrindelwald4();

  //console.log(mouseX + ' ' + mouseY);

  drawSprites();
}

function moveNewt(){
  if(keyWentDown(UP_ARROW)){
    newt.velocityY = -2;
    newt.velocityX = 0;
  }
  if(keyWentDown(DOWN_ARROW)){
    newt.velocityY = 2;
    newt.velocityX = 0;
  }
  if(keyWentDown(RIGHT_ARROW)){
    newt.velocityX = 2;
    newt.velocityY = 0;
  }
  if(keyWentDown(LEFT_ARROW)){
    newt.velocityX = -2;
    newt.velocityY = 0;
  }

  newt.bounceOff(wall);
  newt.bounceOff(wall1);
  newt.bounceOff(wall2);
  newt.bounceOff(wall3);
  newt.bounceOff(wall4);
  newt.bounceOff(wall5);
  newt.bounceOff(wall6);
  newt.bounceOff(wall7);
  newt.bounceOff(wall8);
  newt.bounceOff(wall9);
  newt.bounceOff(wall10);
  newt.bounceOff(wall11);
  newt.bounceOff(wall12);
  newt.bounceOff(wall13);
  newt.bounceOff(wall14);
  newt.bounceOff(wall15);
  newt.bounceOff(wall16);
  newt.bounceOff(wall17);
  newt.bounceOff(wall18);
  newt.bounceOff(wall19);
  newt.bounceOff(wall20);
  newt.bounceOff(wall21);
  newt.bounceOff(wall22);
  newt.bounceOff(wall23);
  newt.bounceOff(wall24);
  newt.bounceOff(wall25);
  newt.bounceOff(wall26);
  newt.bounceOff(wall27);
  newt.bounceOff(wall28);
  newt.bounceOff(wall29);
  newt.bounceOff(wall30);
  newt.bounceOff(wall31);
}

function moveGrindelwald1(){
  grindelwald1.velocityX = 0;
 // grindelwald1.velocityY = 4;
  // if(frameCount > 1000){
  //   if(frameCount%300 == 0){
  //     grindelwald1.velocityX = random(-4, 4);
  //     grindelwald1.velocityY = 0;
  //   }
  //   if(frameCount%200 == 0){
  //     grindelwald1.velocityY = random(-4, 4);
  //     grindelwald1.velocityX = 0;
  //   }
  // }

  grindelwald1.bounceOff(wall);
  grindelwald1.bounceOff(wall1);
  grindelwald1.bounceOff(wall2);
  grindelwald1.bounceOff(wall3);
  grindelwald1.bounceOff(wall4);
  grindelwald1.bounceOff(wall5);
  grindelwald1.bounceOff(wall6);
  grindelwald1.bounceOff(wall7);
  grindelwald1.bounceOff(wall8);
  grindelwald1.bounceOff(wall9);
  grindelwald1.bounceOff(wall10);
  grindelwald1.bounceOff(wall11);
  grindelwald1.bounceOff(wall12);
  grindelwald1.bounceOff(wall13);
  grindelwald1.bounceOff(wall14);
  grindelwald1.bounceOff(wall15);
  grindelwald1.bounceOff(wall16);
  grindelwald1.bounceOff(wall17);
  grindelwald1.bounceOff(wall18);
  grindelwald1.bounceOff(wall19);
  grindelwald1.bounceOff(wall20);
  grindelwald1.bounceOff(wall21);
  grindelwald1.bounceOff(wall22);
  grindelwald1.bounceOff(wall23);
  grindelwald1.bounceOff(wall24);
  grindelwald1.bounceOff(wall25);
  grindelwald1.bounceOff(wall26);
  grindelwald1.bounceOff(wall27);
  grindelwald1.bounceOff(wall28);
  grindelwald1.bounceOff(wall29);
  grindelwald1.bounceOff(wall30);
  grindelwald1.bounceOff(wall31);
}

function moveGrindelwald2(){
  grindelwald2.velocityX = 4;

  if(frameCount == 1000){
    if(frameCount%150 == 0){
      grindelwald2.velocityX = random(-2, 2);
      grindelwald2.velocityY = 0;
    }
    if(frameCount%80 == 0){
      grindelwald2.velocityY = random(-2, 2);
      grindelwald2.velocityX = 0;
    }
  }
  
  grindelwald2.bounceOff(wall);
  grindelwald2.bounceOff(wall1);
  grindelwald2.bounceOff(wall2);
  grindelwald2.bounceOff(wall3);
  grindelwald2.bounceOff(wall4);
  grindelwald2.bounceOff(wall5);
  grindelwald2.bounceOff(wall6);
  grindelwald2.bounceOff(wall7);
  grindelwald2.bounceOff(wall8);
  grindelwald2.bounceOff(wall9);
  grindelwald2.bounceOff(wall10);
  grindelwald2.bounceOff(wall11);
  grindelwald2.bounceOff(wall12);
  grindelwald2.bounceOff(wall13);
  grindelwald2.bounceOff(wall14);
  grindelwald2.bounceOff(wall15);
  grindelwald2.bounceOff(wall16);
  grindelwald2.bounceOff(wall17);
  grindelwald2.bounceOff(wall18);
  grindelwald2.bounceOff(wall19);
  grindelwald2.bounceOff(wall20);
  grindelwald2.bounceOff(wall21);
  grindelwald2.bounceOff(wall22);
  grindelwald2.bounceOff(wall23);
  grindelwald2.bounceOff(wall24);
  grindelwald2.bounceOff(wall25);
  grindelwald2.bounceOff(wall26);
  grindelwald2.bounceOff(wall27);
  grindelwald2.bounceOff(wall28);
  grindelwald2.bounceOff(wall29);
  grindelwald2.bounceOff(wall30);
  grindelwald2.bounceOff(wall31);
}

// function moveGrindelwald3(){
//   grindelwald3.velocityX = 4;

//   if(frameCount == 1000){
//     if(frameCount%150 == 0){
//       grindelwald3.velocityX = random(-2, 2);
//       grindelwald3.velocityY = 0;
//     }
//     if(frameCount%80 == 0){
//       grindelwald3.velocityY = random(-2, 2);
//       grindelwald3.velocityX = 0;
//     }
//   }
  
//   grindelwald3.bounceOff(wall);
//   grindelwald3.bounceOff(wall1);
//   grindelwald3.bounceOff(wall2);
//   grindelwald3.bounceOff(wall3);
//   grindelwald3.bounceOff(wall4);
//   grindelwald3.bounceOff(wall5);
//   grindelwald3.bounceOff(wall6);
//   grindelwald3.bounceOff(wall7);
//   grindelwald3.bounceOff(wall8);
//   grindelwald3.bounceOff(wall9);
//   grindelwald3.bounceOff(wall10);
//   grindelwald3.bounceOff(wall11);
//   grindelwald3.bounceOff(wall12);
//   grindelwald3.bounceOff(wall13);
//   grindelwald3.bounceOff(wall14);
//   grindelwald3.bounceOff(wall15);
//   grindelwald3.bounceOff(wall16);
//   grindelwald3.bounceOff(wall17);
//   grindelwald3.bounceOff(wall18);
//   grindelwald3.bounceOff(wall19);
//   grindelwald3.bounceOff(wall20);
//   grindelwald3.bounceOff(wall21);
//   grindelwald3.bounceOff(wall22);
//   grindelwald3.bounceOff(wall23);
//   grindelwald3.bounceOff(wall24);
//   grindelwald3.bounceOff(wall25);
//   grindelwald3.bounceOff(wall26);
//   grindelwald3.bounceOff(wall27);
//   grindelwald3.bounceOff(wall28);
//   grindelwald3.bounceOff(wall29);
//   grindelwald3.bounceOff(wall30);
//   grindelwald3.bounceOff(wall31);
// }

// function moveGrindelwald4(){
//   grindelwald4.velocityX = 4;

//   if(frameCount == 1000){
//     if(frameCount%150 == 0){
//       grindelwald4.velocityX = random(-2, 2);
//       grindelwald4.velocityY = 0;
//     }
//     if(frameCount%80 == 0){
//       grindelwald4.velocityY = random(-2, 2);
//       grindelwald4.velocityX = 0;
//     }
//   }
  
//   grindelwald4.bounceOff(wall);
//   grindelwald4.bounceOff(wall1);
//   grindelwald4.bounceOff(wall2);
//   grindelwald4.bounceOff(wall3);
//   grindelwald4.bounceOff(wall4);
//   grindelwald4.bounceOff(wall5);
//   grindelwald4.bounceOff(wall6);
//   grindelwald4.bounceOff(wall7);
//   grindelwald4.bounceOff(wall8);
//   grindelwald4.bounceOff(wall9);
//   grindelwald4.bounceOff(wall10);
//   grindelwald4.bounceOff(wall11);
//   grindelwald4.bounceOff(wall12);
//   grindelwald4.bounceOff(wall13);
//   grindelwald4.bounceOff(wall14);
//   grindelwald4.bounceOff(wall15);
//   grindelwald4.bounceOff(wall16);
//   grindelwald4.bounceOff(wall17);
//   grindelwald4.bounceOff(wall18);
//   grindelwald4.bounceOff(wall19);
//   grindelwald4.bounceOff(wall20);
//   grindelwald4.bounceOff(wall21);
//   grindelwald4.bounceOff(wall22);
//   grindelwald4.bounceOff(wall23);
//   grindelwald4.bounceOff(wall24);
//   grindelwald4.bounceOff(wall25);
//   grindelwald4.bounceOff(wall26);
//   grindelwald4.bounceOff(wall27);
//   grindelwald4.bounceOff(wall28);
//   grindelwald4.bounceOff(wall29);
//   grindelwald4.bounceOff(wall30);
//   grindelwald4.bounceOff(wall31);
// }