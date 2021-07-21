class Block {
    constructor(x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    show(){
        strokeWeight(0.1);
        fill('grey');
        rect(this.x, this.y, this.w, this.h);
    }

}