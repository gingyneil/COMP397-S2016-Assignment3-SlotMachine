var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(imageString) {
        _super.call(this, imageString);
        //  this.on("click", onclick);
    }
    Button.prototype.onclick = function (event) {
        playerBet += 1;
        playerBetAmount.text = playerBet.toString();
    };
    return Button;
}(createjs.Bitmap));
//# sourceMappingURL=button.js.map