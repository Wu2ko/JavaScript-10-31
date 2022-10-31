//DOM  manipulation
/*const article = document.getElementById("vip");
console.log(article)
const articles = document.getElementsByTagName('article')
console.log(articles)
const purple = document.getElementsByClassName('purple')
console.log(purple)
console.log("***********************")
*/
const purple = document.querySelector('.purple')
/*console.log(purple)
const allArticles = document.querySelectorAll('article')
console.log(allArticles)
*//*
purple.addEventListener('click',()=>{
    purple.style.backgroundColor = 'purple';
})*/
const button = document.querySelector('button');
let link = document.querySelector('.purple a')
let text = document.querySelector('.purple p')

button.addEventListener('click',()=>{
    const color = document.querySelector('input').value; //reik value prieraso kad imtu reiksme
    purple.style.backgroundColor = color
})
purple.addEventListener('click',()=>{
    purple.style.textTransform ='uppercase'  //visas tekstas i didziasiai
    link.href = "http://kitm.lt"
    text.textContent = "Labai gera naujiena" //keiciam text node turini
    text.innerHTML = "<ul><li>Labas</li></ul>"//keiciam html node turini
})








/*
let links = document.querySelectorAll('a');
for (const link of links){
    link.href = "http://kitm.lt"
}
*/