class Button extends createjs.Bitmap {

   

    constructor(imageString: string) 
    {

        super(imageString);
        
      //  this.on("click", onclick);

    }

    public onclick(event: createjs.MouseEvent):void
    {
        playerBet += 1;
        playerBetAmount.text = playerBet.toString();

    }
}