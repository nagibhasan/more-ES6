class teamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    providefeedback(){
        console.log(`${this.name}thank you for your feedback`)
    }
}

class Instructor extends teamMember{
    
    designation = 'Web course Instructor'
    team = 'web team'
    location;
    constructor(name, location){
       super(name, location); 
    }
    startSupporSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
    providefeedback(){
        console.log(`${this.name}thank you for your feedback`)
    }
}
class Developer extends teamMember{
    designation = 'Web course Instructor'
    team = 'web team'
    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`please develop the ${feature}`)
    }
    release(version){
        console.log(`please release the version ${version}`)
    }  
}

class jobPlacement extends teamMember{
    designation = 'jib placement Comandos'
    team = 'job placement'
    tech;
    constructor(name, location, region){
        super(name, location)
        this.region = region;
    }
    provideResume(feature){
        console.log(`please develop the ${feature}`)
    }
    prepareStudent(version){
        console.log(`please release the version ${version}`)
    }   
}

const alia = new Developer('Alia Bhat', 'Dhaka', 'react');
console.log(alia);
alia.providefeedback();
const bipasha = new jobPlacement('bipasha', 'kolkata', 'India');
console.log(bipasha);
