///<reference path="reference.ts"/>
/**
 * Button
 */


//VARIABLES*********************************
let slotItem: createjs.Bitmap[] = [];

//GAME OBJECTS
let background: createjs.Bitmap;
let game: createjs.Container;

//labels
let labelWinStatic: createjs.Text;
let labelWinAmount: createjs.Text;
let labelTotalStatic: createjs.Text;
let labelTotalAmount: createjs.Text;
let labelBetStatic: createjs.Text;
let labelBetAmount: createjs.Text;
//buttons
let spinButton: createjs.Bitmap;
let bet10Button: Button;
let bet100Button: Button;
let betMaxButton: Button;
let betOneButton: Button;


//GAME VARIABLES
let playerMoneyAmount = 1000;
let manifest = [
    { id: "betonebutton", src: "Assets/images/betonebutton.jpg" }

];
let playerBet = 0;
let playerBetAmount:createjs.Text ;

    playerBetAmount = new createjs.Text(playerBet.toString());

    playerBetAmount.text = playerBet.toString();

let playerWinAmount = 0;
let tallyOfBetAmount = 0;





// make a reference to the canvas element
let canvas: HTMLElement = document.getElementById("canvas");
// create a reference to a stage container
let stage: createjs.Stage;

//let helloLabel:createjs.Text;

function init(): void {
    stage = new createjs.Stage(canvas);// instantiates the stage container
    createjs.Ticker.framerate = 60; // frame rate
    createjs.Ticker.on("tick", gameLoop);    // create an event listener for the tick event

    // call the main game function 
    main();
}

//GAME LOOP
function gameLoop(): void {
    /* helloLabel.rotation += 5;*/


    stage.update(); // refreshes the page

}


function main(): void {

    game = new createjs.Container();


    /*helloLabel = new createjs.Text("Hello world!", "40px Arial", "#00000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * .5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * .5;
    helloLabel.x = 320;
    helloLabel.y = 240;
    stage.addChild(helloLabel);
    helloLabel.text
    */



    stage.addChild(game);
    createUI();
    betOneButton.on("click", clickBetOneButton);
    bet10Button.on("click", clickBetTenButton);
    bet100Button.on("click", clickBetOneHundButton);
    betMaxButton.on("click", clickBetMaxButton);

}

window.addEventListener("load", init);


//Creates the graphical user interface
function createUI() {

    //Add the slot machine image to the background of the game screen
    background = new createjs.Bitmap("assets/images/slotmachine.png");
    background.regX = (540 - background.image.width) / 2;
    background.regY = (680 - background.image.height) / 2;
    game.addChild(background);

    //Add 3 slot machine items for the game and set default positions
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

    //Create and Add labels and buttons for won, bet and total*********************************

    //Bet label and bet amount label
    labelBetStatic = new createjs.Text("BET AMOUNT", "20px Arial", "#FFFFFF");
    game.addChild(labelBetStatic);
    labelBetStatic.x = 70;
    labelBetStatic.y = 530;

    labelBetAmount = new createjs.Text(playerBetAmount.text, "20px Arial", "#FFFFFF");
    game.addChild(labelBetAmount);
    labelBetAmount.x = 70;
    labelBetAmount.y = 560;


    //WIN STATIC LABEL AND WIN AMOUNT LABEL
    labelWinStatic = new createjs.Text("WIN AMOUNT", "20px Arial", "#FFFFFF");
    game.addChild(labelWinStatic);
    labelWinStatic.x = 250;
    labelWinStatic.y = 530;

    labelWinAmount = new createjs.Text(playerWinAmount.toString(), "20px Arial", "#FFFFFF");
    game.addChild(labelWinAmount);
    labelWinAmount.x = 250;
    labelWinAmount.y = 560;

    //TOTAL AMOUNT STATIC LABEL AND PLAYERS TOTAL AMOUNT LABEL
    labelTotalStatic = new createjs.Text("TOTAL AMOUNT", "20px Arial", "#FFFFFF");
    game.addChild(labelTotalStatic);
    labelTotalStatic.x = 415;
    labelTotalStatic.y = 530;

    labelTotalAmount = new createjs.Text(playerMoneyAmount.toString(), "20px Arial", "#FFFFFF");
    game.addChild(labelTotalAmount);
    labelTotalAmount.x = 415;
    labelTotalAmount.y = 560;

    //SPIN BUTTON
    spinButton = new createjs.Bitmap("assets/images/spin-button.jpeg");
    game.addChild(spinButton);
    spinButton.x = 500;
    spinButton.y = 410;

    //Bet 1 bet 10 bet 100 and bet max buttons
    betOneButton = new Button("assets/images/betonebutton.jpg");
    game.addChild(betOneButton);
    betOneButton.x = 100;
    betOneButton.y = 430;

    bet10Button = new Button("assets/images/bet10button.jpg");
    game.addChild(bet10Button);
    bet10Button.x = 180;
    bet10Button.y = 430;

    bet100Button = new Button("assets/images/bet100button.jpg");
    game.addChild(bet100Button);
    bet100Button.x = 260;
    bet100Button.y = 430;

    betMaxButton = new Button("assets/images/betmaxbutton.jpg");
    game.addChild(betMaxButton);
    betMaxButton.x = 340;
    betMaxButton.y = 430;
}





// click the bet 1 button
function clickBetOneButton() {

    //update variables
    playerBet += 1;
    playerMoneyAmount -=1;
    //upday labels on game
    labelBetAmount.text = playerBet.toString();
   labelTotalAmount.text = playerMoneyAmount.toString();

    
}


// click the bet 10 button
function clickBetTenButton(): void {
    
    playerBet += 10;
    playerMoneyAmount -= 10;

    labelBetAmount.text = playerBet.toString();
    labelTotalAmount.text = playerMoneyAmount.toString();

}
// click the bet 100 button
function clickBetOneHundButton(): void {
    
    playerBet += 100;
    playerMoneyAmount -= 100;

    labelBetAmount.text = playerBet.toString();
    labelTotalAmount.text = playerMoneyAmount.toString();

}
// click the bet MAX button
function clickBetMaxButton(): void {

    labelBetAmount.text = playerMoneyAmount.toString();

    playerMoneyAmount = 0;
    labelTotalAmount.text = playerMoneyAmount.toString();
}

