class Paper
{
    constructor(x,y,r)
    {
        var options=
        {
            isStatic : false,
            restitution : 0.3,
            friction : 0.0,
            density : 1.2
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(this.x,this.y,(this.r-15)/2,options);
        World.add(world,this.body);
    }
    display()
    {
        var ppos=this.body.position;
        push();
        translate(ppos.x,ppos.y);
        fill(255);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}