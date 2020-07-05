var turn = 0;
class Particle{
    constructor(x,y){
        var options = {
            isStatic:false,
            density: 0.2,
            restitution: 0.1,
            friction: 0.1
        }
        this.body = Bodies.circle(x,y,10,options);
        this.width = 20;
        this.height = 20;
        World.add(world, this.body);
    }
    display(){
        if(turn>=5){
            this.body = null;
        }
        if(this.body){
            var pos = this.body.position;
            ellipseMode(CENTER);
            fill(random(255,0),random(255,0),random(255,0));
            ellipse(pos.x,pos.y,this.width,this.height);
            if(this.body.position.y>490&&turn<=5){
                turn++
                if(this.body.position<80){
                    score += 50*o;
                    this.body = null;
                }
                else if(this.body.position.x<160){
                    score += 50*q;
                    this.body = null;
                }
                else if(this.body.position.x<240){
                    score += 50*w;
                    this.body = null;
                }
                else if(this.body.position.x<320){
                    score += 50*e;
                    this.body = null;
                }
                else if(this.body.position.x<400){
                    score += 50*r;
                    this.body = null;
                }
                else if(this.body.position.x<480){
                    score += 50*t;
                    this.body = null;
                }
                else if(this.body.position.x<560){
                    score += 50*y;
                    this.body = null;
                }
                else if(this.body.position.x<640){
                    score += 50*u;
                    this.body = null;
                }
                else if(this.body.position.x<720){
                    score += 50*m;
                    this.body = null;
                }
                else if(this.body.position.x<800){
                    score += 50*p;
                    this.body = null;
                }
            }
        }
    }
}