class Block{
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("block.png");
    this.Visibility = 255;
  }
  display(){
       
    if(this.body.speed < 3)
      super.display();

      else{
        World.remove(world,this.body)
        push();
        tint(255, this.Visibility);
        image(this.image,this.body.position.x,this.body.position.y);
        this.Visibility -= 5;
        pop();
      }
    
    console.log(this.body.speed);

    
  }
}