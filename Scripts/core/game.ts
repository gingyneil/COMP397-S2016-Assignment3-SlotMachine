///<reference path="reference.ts"/>

// make a reference to the canvas element
let canvas:HTMLElement = document.getElementById("canvas");	
// create a ference to a stage container
let stage:createjs.Stage;

let helloLabel:createjs.Text;

function init():void {
    stage = new createjs.Stage(canvas);// instantiates the stage container
    createjs.Ticker.framerate = 60; // frame rate
    createjs.Ticker.on("tick", gameLoop);    // create an event listener for the tick event
    main(); // call the main game function 
}

function gameLoop():void {
    helloLabel.rotation += 5;
    
    
    stage.update(); // refreshes the page

}


function main():void {
    helloLabel = new createjs.Text("Hello world!", "40px Arial", "#00000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * .5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * .5;
    helloLabel.x = 320;
    helloLabel.y = 240;
    stage.addChild(helloLabel);

    helloLabel.text
}
window.addEventListener("load", init);