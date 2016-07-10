///<reference path="reference.ts"/>


//VARIABLES*********************************
let slotItem: createjs.Bitmap[] = [];

//GAME OBJECTS
let background: createjs.Bitmap;
let game: createjs.Container;

// make a reference to the canvas element
let canvas:HTMLElement = document.getElementById("canvas");	
// create a ference to a stage container
let stage:createjs.Stage;

//let helloLabel:createjs.Text;

function init():void {
    stage = new createjs.Stage(canvas);// instantiates the stage container
    createjs.Ticker.framerate = 60; // frame rate
    createjs.Ticker.on("tick", gameLoop);    // create an event listener for the tick event
   
   // call the main game function 
    main(); 
}

//GAME LOOP
function gameLoop():void {
   /* helloLabel.rotation += 5;*/
    
    
    stage.update(); // refreshes the page

}


function main():void {
   game = new createjs.Container();
   
   createUI();

    /*helloLabel = new createjs.Text("Hello world!", "40px Arial", "#00000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * .5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * .5;
    helloLabel.x = 320;
    helloLabel.y = 240;
    stage.addChild(helloLabel);

    helloLabel.text
    */

    stage.addChild(game);
}
window.addEventListener("load", init);

function createUI() {
    
    //Add the slot machine image to the background of the game screen
    background = new createjs.Bitmap("assets/images/slotmachine.png");
    background.regX = (540 - background.image.width) / 2;
    background.regY = (680 - background.image.height) /2;
    game.addChild(background);

    //Add 3 slot machine items for the game and set positions
    slotItem[0] = new createjs.Bitmap("assets/images/hulk.jpg");
    slotItem[1] = new createjs.Bitmap("assets/images/ironman.jpg");
    slotItem[2] = new createjs.Bitmap("assets/images/Thor.jpg");
    game.addChild(slotItem[0]);
    game.addChild(slotItem[1]);
    game.addChild(slotItem[2]);
    slotItem[0].x = 90;
    slotItem[0].y = 200;
    slotItem[1].x = 250;
    slotItem[1].y = 200;
    slotItem[2].x = 415;
    slotItem[2].y = 200;

}