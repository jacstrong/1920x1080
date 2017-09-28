function Pixel(x, y, c){
    this.x = x;
    this.y = y;
    this.c = c;

    this.clicked = function(inx, iny){
        if (this.x < inx && this.x + 30 > inx && this.y < iny && this.y + 30 > iny) {
            return true;
        } else {
            return false;
        }
    }

    this.newColor = function(){
        this.c = color(random(0,255), random(0,255), random(0,255));
    }

    this.show = function() {
        noStroke();
        fill(this.c);
        rect(this.x, this.y, 30, 30);
    }
}