/**
 * Created by mrcheese on 15/09/15.
 */
var Vector2 = function(){
    this.x = 0;
    this.y = 0;
};

Vector2.prototype.set = function(x,y){
    this.x = x;
    this.y = y;

}

// return single value
Vector2.prototype.Magnitude = function(){
    return Math.sqrt(this.x * this.x + this.y + this.y);
}

//returns Vector2
Vector2.prototype.Normalize = function() {
    var length = this.Magnitude();
    if (length == 0) {
        return;
    }

    this.x /= length;
    this.y /= length;


}