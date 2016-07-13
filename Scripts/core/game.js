///<reference path="reference.ts"/>
//VARIABLES*********************************
var slotContainers = [];
var slotItem = [];
//GAME OBJECTS
var background; // background
var game;
//labels
var labelWinStatic; //label win
var labelWinAmount; // how much player won label
var labelTotalStatic; //label "total"
var labelTotalAmount; // total money play has label
var labelBetStatic; // bet label
var labelBetAmount; //total number player has bet label
var win;
var playerBet;
var playerBetAmount = 0;
playerBet = 0;
//buttons
var spinButton;
var bet10Button;
var bet100Button;
var betMaxButton;
var betOneButton;
var resetButton;
//GAME VARIABLES
var playerMoneyAmount = 1000; // how much the player has in total
var jackpot = 5000;
var batman = 0;
var batmanPic;
batmanPic = new createjs.Bitmap("../../Assets/images/batman.jpg");
var spiderman = 0;
var thor = 0;
var hulk = 0;
var ironman = 0;
var superman = 0;
var thanos = 0;
var blankPic;
blankPic = new createjs.Bitmap("../../Assets/images/blank.jpg");
var blanks = 0;
var indexBet = 0;
window.addEventListener("load", preload);
var assetData = [
    { id: "ResetButton", src: "../../Assets/images/resetButton.jpg" },
    { id: "SlotMachine", src: "../../Assets/images/slotmachine.png" },
    { id: "BetOneButton", src: "../../Assets/images/betonebutton.jpg" },
    { id: "Bet10Button", src: "../../Assets/images/bet10button.jpg" },
    { id: "Bet100Button", src: "../../Assets/images/bet100button.jpg" },
    { id: "SpinButton", src: "../../Assets/images/spin-button.jpeg" },
    { id: "marvel", src: "../../Assets/images/marvel.jpg" },
    { id: "vs", src: "../../Assets/images/vs.jpg" },
    { id: "DC", src: "../../Assets/images/DCComicslogo.jpg" },
    { id: "batman", src: "../../Assets/images/batman.jpg" },
    { id: "hulk", src: "../../Assets/images/hulk.jpg" },
    { id: "ironman", src: "../../Assets/images/Ironman.jpg" },
    { id: "spiderman", src: "../../Assets/images/spiderman.jpg" },
    { id: "superman", src: "../../Assets/images/superman.jpg" },
    { id: "thor", src: "../../Assets/images/Thor.jpg" },
    { id: "thanos", src: "../../Assets/images/thanos.jpg" },
    { id: "blank", src: "../../Assets/images/blank.jpg" }
];
var assets;
var playerWinAmount = 0;
// make a reference to the canvas element
var canvas = document.getElementById("canvas");
// create a reference to a stage container
var stage;
//Preload images
function preload() {
    assets = new createjs.LoadQueue();
    assets.loadManifest(assetData);
    assets.on("complete", init);
}
function init() {
    stage = new createjs.Stage(canvas); // instantiates the stage container
    createjs.Ticker.framerate = 60; // frame rate
    createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event
    // call the main game function 
    main();
}
//GAME LOOP
function gameLoop() {
    stage.update(); // refreshes the page
}
function main() {
    game = new createjs.Container();
    stage.addChild(game);
    createUI();
    betOneButton.on("click", clickBetOneButton);
    bet10Button.on("click", clickBetTenButton);
    bet100Button.on("click", clickBetOneHundButton);
    betMaxButton.on("click", clickBetMaxButton);
    resetButton.on("click", resetFunction);
    spinButton.on("click", _spinReels);
}
//Creates the graphical user interface
function createUI() {
    //Add the slot machine image to the background of the game screen
    background = new createjs.Bitmap("assets/images/slotmachine.png");
    background.regX = (540 - background.image.width) / 2;
    background.regY = (680 - background.image.height) / 2;
    game.addChild(background);
    //Add 3 slot machine items for the game and set default positions
    slotContainers[0] = new createjs.Container();
    slotContainers[1] = new createjs.Container();
    slotContainers[2] = new createjs.Container();
    game.addChild(slotContainers[0]);
    game.addChild(slotContainers[1]);
    game.addChild(slotContainers[2]);
    slotContainers[0].x = 85;
    slotContainers[0].y = 200;
    slotContainers[1].x = 250;
    slotContainers[1].y = 200;
    slotContainers[2].x = 415;
    slotContainers[2].y = 200;
    slotItem[0] = new createjs.Bitmap("assets/images/marvel.jpg");
    slotItem[1] = new createjs.Bitmap("assets/images/vs.jpg");
    slotItem[2] = new createjs.Bitmap("assets/images/DCComicslogo.jpg");
    slotContainers[0].addChild(slotItem[0]);
    slotContainers[1].addChild(slotItem[1]);
    slotContainers[2].addChild(slotItem[2]);
    //Create and Add labels and buttons for won, bet and total*********************************
    //Bet label and bet amount label
    labelBetStatic = new createjs.Text("BET AMOUNT", "20px Arial", "#FFFFFF");
    game.addChild(labelBetStatic);
    labelBetStatic.x = 70;
    labelBetStatic.y = 530;
    labelBetAmount = new createjs.Text(playerBetAmount.toString(), "20px Arial", "#FFFFFF");
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
    //SPIN BUTTON & RESET BUTTON
    spinButton = new createjs.Bitmap("assets/images/spin-button.jpeg");
    game.addChild(spinButton);
    spinButton.x = 500;
    spinButton.y = 410;
    resetButton = new Button("assets/images/resetButton.jpg");
    game.addChild(resetButton);
    resetButton.x = 430;
    resetButton.y = 410;
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
    //resetFunction();
}
// click the bet 1 button
function clickBetOneButton() {
    if (playerBet == 0 && playerMoneyAmount <= 0) {
        alert("please add more cash or vacate the slot machine");
    }
    else {
        //update variables
        playerBet += 1;
        //upday labels on game
        labelBetAmount.text = "$" + playerBet.toString();
        labelTotalAmount.text = "$" + playerMoneyAmount.toString();
    }
}
// click the bet 10 button
function clickBetTenButton() {
    playerBet += 10;
    labelBetAmount.text = "$" + playerBet.toString();
    labelTotalAmount.text = "$" + playerMoneyAmount.toString();
}
// click the bet 100 button
function clickBetOneHundButton() {
    playerBet += 100;
    labelBetAmount.text = "$" + playerBet.toString();
    labelTotalAmount.text = "$" + playerMoneyAmount.toString();
}
// click the bet MAX button
function clickBetMaxButton() {
    labelBetAmount.text = "$" + playerMoneyAmount.toString();
    playerBet = playerMoneyAmount;
    labelTotalAmount.text = "$" + playerBetAmount.toString();
}
// utility function to reset the game variables
function resetFunction() {
    playerBet = 0;
    win = 0;
    playerWinAmount = 0;
    playerMoneyAmount = 1000;
    jackpot = 5000;
    slotContainers[0].removeAllChildren();
    slotContainers[1].removeAllChildren();
    slotContainers[2].removeAllChildren();
    slotItem[0] = new createjs.Bitmap("assets/images/marvel.jpg");
    slotItem[1] = new createjs.Bitmap("assets/images/vs.jpg");
    slotItem[2] = new createjs.Bitmap("assets/images/DCComicslogo.jpg");
    slotContainers[0].addChild(slotItem[0]);
    slotContainers[1].addChild(slotItem[1]);
    slotContainers[2].addChild(slotItem[2]);
    labelBetAmount.text = "$" + playerBet.toString();
    labelWinAmount.text = "$" + win.toString();
    labelTotalAmount.text = "$" + playerMoneyAmount.toString();
}
// determines the results of the spin
function _spinReels() {
    if (playerBet == 0 || playerMoneyAmount <= 0) {
        alert("please place a wager");
    }
    else {
        hulk = 0;
        batman = 0;
        spiderman = 0;
        superman = 0;
        blanks = 0;
        thor = 0;
        thanos = 0;
        ironman = 0;
        slotContainers[0].removeAllChildren();
        slotContainers[1].removeAllChildren();
        slotContainers[2].removeAllChildren();
        var betLine = [" ", " ", " "];
        var outCome = [0, 0, 0];
        var bitmap;
        for (var spin = 0; spin < 3; spin++) {
            outCome[spin] = Math.floor((Math.random() * 65) + 1);
            switch (outCome[spin]) {
                case checkRange(outCome[spin], 1, 27):
                    betLine[spin] = "Blank";
                    blanks++;
                    slotItem[spin] = new createjs.Bitmap("../../Assets/images/blank.jpg");
                    slotContainers[spin].addChild(slotItem[spin]);
                    break;
                case checkRange(outCome[spin], 28, 37):
                    betLine[spin] = "hulk";
                    hulk++;
                    slotItem[spin] = new createjs.Bitmap("../../Assets/images/hulk.jpg");
                    slotContainers[spin].addChild(slotItem[spin]);
                    break;
                case checkRange(outCome[spin], 38, 46):
                    betLine[spin] = "spiderman";
                    spiderman++;
                    slotItem[spin] = new createjs.Bitmap("../../Assets/images/spiderman.jpg");
                    slotContainers[spin].addChild(slotItem[spin]);
                    break;
                case checkRange(outCome[spin], 47, 54):
                    betLine[spin] = "ironman";
                    ironman++;
                    slotItem[spin] = new createjs.Bitmap("../../Assets/images/Ironman.jpg");
                    slotContainers[spin].addChild(slotItem[spin]);
                    break;
                case checkRange(outCome[spin], 55, 59):
                    betLine[spin] = "superman";
                    superman++;
                    slotItem[spin] = new createjs.Bitmap("../../Assets/images/superman.jpg");
                    slotContainers[spin].addChild(slotItem[spin]);
                    break;
                case checkRange(outCome[spin], 60, 62):
                    betLine[spin] = "thor";
                    thor++;
                    slotItem[spin] = new createjs.Bitmap("../../Assets/images/Thor.jpg");
                    slotContainers[spin].addChild(slotItem[spin]);
                    break;
                case checkRange(outCome[spin], 63, 64):
                    betLine[spin] = "thanos";
                    thanos++;
                    slotItem[spin] = new createjs.Bitmap("../../Assets/images/thanos.jpg");
                    slotContainers[spin].addChild(slotItem[spin]);
                    break;
                case checkRange(outCome[spin], 65, 65):
                    betLine[spin] = "batman";
                    batman++;
                    slotItem[spin] = new createjs.Bitmap("../../Assets/images/batman.jpg");
                    slotContainers[spin].addChild(slotItem[spin]);
                    break;
            }
        }
        console.log(betLine, "\n" + outCome);
        determineWinnings();
        return betLine;
    }
}
function determineWinnings() {
    if (blanks == 0) {
        if (hulk == 3) {
            win = playerBet * 10;
            playerMoneyAmount += win;
        }
        else if (spiderman == 3) {
            win = playerBet * 20;
            playerMoneyAmount += win;
        }
        else if (ironman == 3) {
            win = playerBet * 30;
            playerMoneyAmount += win;
        }
        else if (superman == 3) {
            win = playerBet * 40;
            playerMoneyAmount += win;
        }
        else if (thor == 3) {
            win = playerBet * 50;
            playerMoneyAmount += win;
        }
        else if (thanos == 3) {
            win = playerBet * 75;
            playerMoneyAmount += win;
        }
        else if (batman == 3) {
            win = playerBet * 100;
            playerMoneyAmount += win;
        }
        else if (hulk == 2) {
            win = playerBet * 2;
            playerMoneyAmount += win;
        }
        else if (spiderman == 2) {
            win = playerBet * 2;
            playerMoneyAmount += win;
        }
        else if (ironman == 2) {
            win = playerBet * 3;
            playerMoneyAmount += win;
        }
        else if (superman == 2) {
            win = playerBet * 4;
            playerMoneyAmount += win;
        }
        else if (thor == 2) {
            win = playerBet * 5;
            playerMoneyAmount += win;
        }
        else if (thanos == 2) {
            win = playerBet * 10;
            playerMoneyAmount += win;
        }
        else if (batman == 2) {
            win = playerBet * 20;
            playerMoneyAmount += win;
        }
        else if (batman == 1) {
            win = playerBet * 5;
            playerMoneyAmount += win;
        }
        else {
            win = playerBet * 1;
            playerMoneyAmount += win;
        }
        //log win
        alert("YOU WON! " + "$" + win);
        console.log("Win!" + "$" + win);
        //show how much they won
        labelWinAmount.text = "$" + win.toString();
        //calculate the amount won. show in the label      
        labelTotalAmount.text = "$" + playerMoneyAmount.toString();
        playerBet = 0;
        blanks = 0;
        labelBetAmount.text = "$" + playerBet.toString();
        //reset the bet amount
        labelBetAmount.text = "$" + playerBet.toString();
    }
    else {
        //show the loss
        console.log("Loss!"
            + "blanks:" + blanks + "\n" + "batman:" + batman + "\n" +
            "hulk: " + hulk + "\n" + "spiderman: " + spiderman + "\n" +
            "superman: " + superman + "\n" + "thanos: " + thanos + "\n" +
            "ironman: " + ironman + "\n" + "thor: " + thor);
        playerMoneyAmount -= playerBet;
        labelWinAmount.text = "$" + playerMoneyAmount.toString();
        labelTotalAmount.text = "$" + playerMoneyAmount.toString();
        if (playerMoneyAmount == 0) {
            playerBet = 0;
            labelBetAmount.text = "$" + playerBet.toString();
            alert("you lose please add more cash or vacate the slot machine");
        }
        playerBetAmount = 0;
        blanks = 0;
    }
}
function checkRange(value, lowerBounds, upperBounds) {
    if (value >= lowerBounds && value <= upperBounds) {
        return value;
    }
    else {
        return !value;
    }
}
function mouseOver() {
    betOneButton.alpha = .1;
}
//# sourceMappingURL=game.js.map