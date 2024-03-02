class SoftwareEngineer{
    name;
    designation;
    address;
    officeHour;
    constructor(name,designation,address,officeHour){
        this.name = name;
        this.designation = designation;
        this.address = address;
        this.officeHour = officeHour;
    }
    showDetails(){
        console.log(`Hi I am ${this.name}. My designation is ${this.designation}`);
    }
}

class WebDeveloper extends SoftwareEngineer{
    tech;
    constructor(name,designation,address,officeHour,tech){
        super(name,designation,address,officeHour);
        this.tech = tech;
    }
    whoAmI(){
        console.log(`I am a ${this.tech} ${this.designation}`);
    }

}
const Eyafi = new SoftwareEngineer('Eyafi','Web Developer','Dhaka','9 to 5');
Eyafi.showDetails()
const sajid = new WebDeveloper('Sajid','Web Developer','Gazipur, Dhaka','9 to 5','MERN stach');
sajid.showDetails();
sajid.whoAmI();