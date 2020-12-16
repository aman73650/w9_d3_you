class quadilateral{
    constructor(){
        console.log("A quadilateral is created");
    }
}
class Rectangle{
    constructor(l,b){
        this.length=l;
        this.breadth=b;
    }
    area_rectangle() {
        console.log("area of rectangle:-"+this.length * this.breadth);
    }
    peri_rectangle(){
        console.log("perimeter of rectangle:-"+2*(this.length+this.breadth));
    }
}
class Square{
    constructor(side){
        this.length=side;
    }
    area_square(){
        console.log("area of square:-"+this.length*this.length);
    }
    peri_square(){
        console.log("perimeter of square:-"+4*this.length);
    }
}
class rhombus{
    constructor(side,d1,d2){
        this.length=side;
        this.d1=d1;
        this.d2=d2;
    }
    area_rhombus(){
        console.log("area of rhombus:-"+(this.d1*this.d2)/2);
    }
    peri_rhombus(){
        console.log("perimeter of rhombus:-"+4*this.length);
    }
}
class parallelogram{
    constructor(a,b,h){
        this.a=a;
        this.b=b;
        this.h=h;
    }
    area_parallelogram(){
        console.log("area of parallelogram:-"+this.b*this.h);
    }
    peri_parallelogram(){
        console.log("perimeter of parallelogram:-"+2*(this.a+this.b));
    }
}
class trapezoid{
    constructor(a1,a2,b1,b2,h){
        this.a1=a1;
        this.a2=a2;
        this.b1=b1;
        this.b2=b2;
        this.h=h;
    }
    area_trapezoid(){
        console.log("area of trapezoid:-"+((this.b1+this.b2)*this.h/2));
    }
    peri_trapezoid(){
        console.log("perimeter of trapezoid:-"+(this.a1+this.a2+this.b1+this.b2));
    }
}
const neww= new quadilateral();
const one= new Rectangle(5,6);
const two= new Square(5);
const three=new rhombus(5,3,3);
const four= new parallelogram(5,4,3);
const five=new trapezoid(1,1,2,2,5);
one.area_rectangle();
one.peri_rectangle();
two.area_square();
two.peri_square();
three.area_rhombus();
three.peri_rhombus();
four.area_parallelogram();
four.peri_parallelogram();
five.area_trapezoid();
five.peri_trapezoid();