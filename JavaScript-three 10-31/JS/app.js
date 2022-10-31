let name = "martynas"
let count = 14
let price = 12.23
//literals
console.log(`mano vardas yra ${name}`)
console.log(`suma: ${count*price}`)
console.log(`--------`)

//array destructor
let [firstname, middename, lastname]=[`Dylan`, `Coding god`, `israel`]
console.log(firstname);
console.log(middename)
console.log(lastname)
lastname='Clement'
console.log(lastname)

const personalInformation = {
    firstname: 'Dylan',
    lastname:'israel',
    city: 'Austin',
    state: 'Texas',
    zipCode: '123'
}

const {firstname: fn, lastname:ln} = personalInformation;
console.log(`${fn}`)
console.log('-----------------------')

function addressMaker(city,state){
    const newAddress = {newCity:city, newState:state}
    console.log(newAddress)
}
function addressMaker(city,state) {
    const newAddressUpdated = (city, tate)
    console.log(newAddress)
}
console.log('-----------------------')

let students = ['Ieva','Tadas','Tomas','Petras']
const searchstring = 'Tadas'
if (students.includes(searchstring)){
    console.log(`Studentas ${searchstring} rastas`)
    }
else{
    console.log(`Neradau studento`)
}
console.log('---------')
