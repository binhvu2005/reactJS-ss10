class Vehicle1{
    name2: string;
    protected year: number;
    private company: string;
    readonly id1:number = 0;
    constructor(name: string, year: number, company: string){
        this.name2 = name;
        this.year = year;
        this.company = company;
    }
    infoV():void {
        console.log(this.name2+" "+this.year+" "+this.company+" "+this.id1);
        
    }
}
let v3=new Vehicle1("a",2000,"b");
v3.infoV()