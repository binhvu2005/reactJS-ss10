class Cricle {
    private a: number
    constructor(a: number) {
        this.a = a;
    }
    setCricle(c: number) { this.a = c; }
    CV():number { return Math.PI * this.a*2 }
    DT():number { return Math.PI * this.a*this.a*8}

}
let cricle1= new Cricle(5)
cricle1.CV()
cricle1.DT()
cricle1.setCricle(10)
cricle1.CV()
cricle1.DT()
