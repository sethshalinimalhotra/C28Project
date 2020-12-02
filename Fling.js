class Fling{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.005,
            length: 1
        };
        this.fling = Constraint.create(options);
        this.bodyA = bodyA;
        this.pointB = pointB
        World.add(world,this.fling);

    }
    display(){
        if(this.fling.bodyA){
            var pA = this.bodyA.position;
            var pB = this.pointB;
            strokeWeight(4);
            stroke("grey");
            line(pA.x,pA.y,pB.x,pB.y);
        }
    }
    fly(){
        this.fling.bodyA = null;
    }
    attach(bodyA){
        this.fling.bodyA = bodyA;
    }
}