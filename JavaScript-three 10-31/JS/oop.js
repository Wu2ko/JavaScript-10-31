/*function User(name,email,role) {
    this.name = name
    this.email = email
    this.role = role
}//konstruktorius
    User.prototype.sayHi = function () {//metodas
        console.log(`Hi. I am ${this.name}. My email is ${this.email}. My role is ${this.role}`)

}
    User.prototype.showRole = function (){
    console.log (`User ${this.name} is ${this.role}`)
    }

const userOne = new User('vardenis','pavardenis','admin')
userOne.sayHi();

console.log(userOne)
userOne.showRole()
*/
/*
class User {
    constructor(name, email, role) {
        this.name = name
        this.email = email
        this.role = role
    }//konstruktoriu
    sayHi() {//metodas
        console.log(`Hi. I am ${this.name}. My email is ${this.email}. My role is ${this.role}`)

    }

    showRole () {
        console.log(`User ${this.name} is ${this.role}`)
    }
}
const userOne = new User('vardenis','pavardenis','admin')
userOne.sayHi();
console.log(userOne)
userOne.showRole()
*/
//-----------------------------------------------------------
//let skubumas = 0;
/*
function Gedimas(prioritetas,data) {
    {
    if (skubumas = 1) {
        prioritetas = "skubu"
    } else prioritetas = "neskubu"
    }
    this.prioritetas = Gedimas(1);

    console.log(prioritetas)

}
console.log(Gedimas.prioritetas)

Gedimas.prototype.testas = function (){
    console.log(`${this.prioritetas}`)
}
const vienas = new Gedimas()
*/



/*
Gedimas.prototype.pavadinimas = function ()
{

}
Gedimas.prototype.aprasymas = function (){

}
*/


class Support{
    constructor(id) {
        this.id = id;
        this.date = Date.now();
    }
    setTitle(title){//setter
        this.title = title;
    }
    setDescription(description){
        this.description = description;
    }
    setPriority(priority){
        this.priority = priority;
    }
    getData(){//getter
        return [
            this.id,
            this.title,
            this.description,
            this.priority
        ]
    }
}
let issue = new Support(1);
issue.setTitle('Sugedo kompas;');
issue.setDescription(('Nesikrauna WIndows'));
issue.setPriority('Labai svarbu');

for(let data of issue.getData()){
    console.log(data)
}