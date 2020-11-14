class Dustbin
{
    constructor(x,y,width,height)
    {

        var option=
        {
            isStatic:true
        }
        this.image=loadImage("Dustbin.png");
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display()
    {
      push();
      var pos=this.body.position;
      translate(pos.x,pos.y);
     imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
    }
}