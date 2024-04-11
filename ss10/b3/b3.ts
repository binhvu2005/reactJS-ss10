class Employee {
    name: string;
    protected company: string;
    private phone: string;
    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(): void {
        console.log(this.name + ": " + this.company+ " " + this.phone);
        
    }
}
let employee1 = new Employee("binh","bat dong san","213123123");
employee1.printInfo