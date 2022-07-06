var pacman,amarillo,rojo,azul;
var walls=[
{x:550, y:450, w:1200, h:10},
{x:550, y:20, w:1200, h:10},
{x:17, y:235, w:10, h:450},
{x:70, y:50, w:80, h:20},
{x:70, y:100, w:80, h:20},
{x:70, y:150, w:80, h:20},



]


function setup(){
    createCanvas(740,800);
    amarillo= createSprite(550,450,1200,40);
    rojo= createSprite(550,20,1200,40);
    azul= createSprite(15,235,40,390);

   pacman=createSprite(60,120,25,25);
for(var i in walls){
 var wall =
 createSprite(walls[i].x,walls[i].y,walls[i].w,walls[i].h)   
}






}
function draw(){
background("red");

if (keyDown("right")){
    pacman.x +=5
}
if (keyDown("left")){
    pacman.x -=5
    }
if (keyDown("up")){
        pacman.y -=5
        }
if (keyDown("down")){
            pacman.y +=5
            }
























drawSprites ();
}














































































