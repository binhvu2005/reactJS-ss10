class Department {
    public readonly id3=2
    private name:string
    private employee4:Array<string>
    constructor(name:string,employee4:string) {
        this.name=name
        this.employee4=new Array<string>()
        this.employee4.push(employee4)
    }
    describe():void {
        console.log(this.id3+" "+this.name+" ");
        
    }
}