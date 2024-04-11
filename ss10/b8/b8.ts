class Rectangle {
    private width: number
    private height: number
    constructor(width: number, height: number) {
        this.width = width
        this.height = height
    }
    setRectangle(width: number,height:number){
        this.width=width;
        this.height=height;
    }
    CV1(): number { return (this.width+this.height)*2}
    DT1(): number { return this.width*this.height}
    infoH():void { console.log(this.width+this.height+this.CV1()+this.DT1()); }
}
let ab= new Rectangle(10,20)
ab.infoH()
ab.setRectangle(1,2)
ab.infoH()
