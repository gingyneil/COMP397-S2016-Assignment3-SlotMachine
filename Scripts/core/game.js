///<reference path="reference.ts"/>
// make a reference to the canvas element
var canvas = document.getElementById("canvas");
// create a ference to a stage container
var stage;
var helloLabel;
function init() {
    stage = new createjs.Stage(canvas); // instantiates the stage container
    createjs.Ticker.framerate = 60; // frame rate
    createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event
    main(); // call the main game function 
}
function gameLoop() {
    helloLabel.rotation += 5;
    stage.update(); // refreshes the page
}
function main() {
    helloLabel = new createjs.Text("Hello world!", "40px Arial", "#00000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * .5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * .5;
    helloLabel.x = 320;
    helloLabel.y = 240;
    stage.addChild(helloLabel);
    helloLabel.text;
}
window.addEventListener("load", init);
//# sourceMappingURL=game.js.map