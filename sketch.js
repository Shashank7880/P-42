
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var Thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;
var engine, world;
var drops = [];
var rand;
var umbrella;
var maxDrops=100;
var thunderCreatedFrame=0;


function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
   var canvas = createCanvas(500,700);
      
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200,500);

    for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));

        }

    }
    

function draw(){
    Engine.update(engine);
    background(0); 

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        Thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
             case 1: thunder.addImage(thunder1);
             break;
             case 3: thunder.addImage(thunder3);
             break;
             case 4: thunder.addImage(thunder4);
             break;
             default: break;
         }
            Thunder.scale = 0.7 
    }

    if(thunderCreatedFrame + 10 === frameCount && Thunder){
        Thunder.destroy();
    

         switch(rand){
             case 1: thunder.addImage(thunder1);
             break;
             case 2: thunder.addImage(thunder2);
             break; 
             case 3: thunder.addImage(thunder3);
             break;
             case 4: thunder.addImage(thunder4);
             break;
             default: break;
         }

         switch(rand){
             case 1: thunder.addImage(thunder1);
             case 2: thunder.addImage(thunder2);
             case 3: thunder.addImage(thunder3);
             case 4: thunder.addImage(thunder4);
             break;
             default: break;
         }  
        
         switch(rand){
             case 1: thunder.addImage();
             break;
             case 2: thunder.addImage();
             break; 
             case 3: thunder.addImage();
             break;
             case 4: thunder.addImage();
             break;
             default: break;
         }

        thunder.scale = random(0.3,0.6)
    }

    umbrella.display();


    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update ();
        
    }

    drawSprites();
}

