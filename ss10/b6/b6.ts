class Song{
    readonly id4=1
   private name:string
   private length:number
    constructor(name:string,length:number){
        this.name=name
        this.length=length
    }
    setSong(name:string,length:number){
        this.name=name
        this.length=length
    }
}
let song1=new Song ("Song",1)
song1.setSong ("a",3)